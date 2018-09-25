package com.lit.reabastecimento.monitor.model;

import java.util.List;

public class Mesa {

	private int otspendentes;
	private List<Item> itens;

	public List<Item> getItens() {
		return itens;
	}

	public void setItens(List<Item> itens) {
		this.itens = itens;
	}

	public int getOtspendentes() {
		return otspendentes;
	}

	public void setOtspendentes(int otspendentes) {
		this.otspendentes = otspendentes;
	}

}
