import { Component, OnInit, Inject } from "@angular/core";
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { ScanService } from '../_services/scan.service';

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

	mytext;

    constructor(private scanService:ScanService, private barcodeScanner: BarcodeScanner) {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        this.mytext = "Material: ";
    }

    scan() {
    	this.barcodeScanner.scan({
		    formats: "QR_CODE, EAN_13",
		    cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
		    cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
		    message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
		    showFlipCameraButton: true,   // default false
		    preferFrontCamera: false,     // default false
		    showTorchButton: true,        // default false
		    beepOnScan: true,             // Play or Suppress beep on scan (default true)
		    torchOn: false,               // launch with the flashlight on (default false)
		    closeCallback: () => { console.log("Scanner closed")}, // invoked when the scanner was closed (success or abort)
		    resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
		    orientation: "portrait" ,     // Android only, default undefined (sensor-driven orientation), other options: portrait|landscape
		    openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
		  }).then((result) => {
		      this.onScanResult(result.text);
		    }, (errorMessage) => {
		      console.log("No scan. " + errorMessage);
		    }
		  ); 
    }

    onScanResult(ean13) {
    	this.scanService.getData(ean13).subscribe(
    		(result) => {
    			this.mytext = result;
    		},
    		error => {
    			console.log(error);
    		}
    	);
    }
}
