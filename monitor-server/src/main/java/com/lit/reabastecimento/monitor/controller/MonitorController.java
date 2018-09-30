package com.lit.reabastecimento.monitor.controller;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lit.reabastecimento.monitor.model.Item;
import com.lit.reabastecimento.monitor.model.Mesa;
import com.sap.conn.jco.JCoDestination;
import com.sap.conn.jco.JCoDestinationManager;
import com.sap.conn.jco.JCoException;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoTable;

@RestController
public class MonitorController {

	protected JCoDestination destination;

	public MonitorController() throws JCoException {
		destination = JCoDestinationManager.getDestination("ABAP_AS");
	}
	
	@RequestMapping(value = "/api/material/{ean13}", method = RequestMethod.GET)
	public ResponseEntity<Mesa> getMaterial(@PathVariable("ean13") String ean13) {
		Mesa m = new Mesa();
		m.setOtspendentes(987);
		return ResponseEntity.ok(m);
	}

	@RequestMapping(value = "/api/mesa/{lgnum}/{queue}", method = RequestMethod.GET)
	public ResponseEntity<Mesa> getMesa(@PathVariable("lgnum") String lgnum, @PathVariable("queue") String queue) {
		try {
			JCoFunction function = destination.getRepository().getFunction("ZWM_F_MESA_REABAST");

			if (function == null) {
				System.out.println("RFC não encontrada");
				return ResponseEntity.badRequest().build();
			} else {
				function.getImportParameterList().setValue("I_DEPOSITO", lgnum);
				function.getImportParameterList().setValue("I_MESA", queue);
				function.execute(destination);

				Mesa m = new Mesa();
				m.setOtspendentes(function.getExportParameterList().getInt("E_OTS_PENDENTES"));

				JCoTable t_itens = function.getTableParameterList().getTable("T_ITENS_ARMAZENADOS");

				m.setItens(new ArrayList<>());

				do
					if (!t_itens.isEmpty()) {
						Item item = new Item();
						item.setTanum(t_itens.getString("TANUM"));
						item.setMatnr(t_itens.getString("MATNR"));
						item.setMaktx(t_itens.getString("MAKTX"));
						item.setVolum(t_itens.getString("VOLUM"));
						item.setStatus(t_itens.getString("STATUS"));

						m.getItens().add(item);
					}
				while (t_itens.nextRow());

				return ResponseEntity.ok(m);
			}
		} catch (JCoException e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();
		}
	}
}
