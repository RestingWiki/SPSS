import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Metadata from "../../Metadata/Metada";
import SPSONavBar from "../SPSONavBar/SPSONavbar";
import ConnectPrinter from "./ConnectPrinter";
import TogglePrinter from "./TogglePrinter";


function SPSOPrinterManagement(){
    const [physicalPrinters, setPhysicalPrinters] = useState([
        { id: 1, model: "Epson EcoTank L3110", location: "A5" },
        { id: 2, model: "Canon PIXMA TR8520", location: "A5" },
        { id: 3, model: "HP LaserJet 1020", location: "B2" },
        { id: 4, model: "HP Envy 5055", location: "B2" },
        { id: 3, model: "Lexmark MS431DN", location: "B10" },
        { id: 4, model: "Lexmark MS431DN", location: "B10" },
        { id: 5, model: "Epson EcoTank L3110", location: "C4" },
        { id: 6, model: "Brother MFC-L2750DW", location: "C4" },
      ]);
      const [connectedPrinters, setConnectedPrinters] = useState([]);
    
      // Connect a printer
      const connectPrinter = (printerId) => {
        const printer = physicalPrinters.find((p) => p.id === printerId);
        setConnectedPrinters([...connectedPrinters, { ...printer, status: "enabled" }]);
        setPhysicalPrinters(physicalPrinters.filter((p) => p.id !== printerId));
      };
    
      // Toggle printer status
      const togglePrinterStatus = (printerId) => {
        setConnectedPrinters(
          connectedPrinters.map((printer) =>
            printer.id === printerId
              ? { ...printer, status: printer.status === "enabled" ? "disabled" : "enabled" }
              : printer
          )
        );
      };
    
      // Remove a printer
      const removePrinter = (printerId) => {
        const printer = connectedPrinters.find((p) => p.id === printerId);
        setConnectedPrinters(connectedPrinters.filter((p) => p.id !== printerId));
        setPhysicalPrinters([...physicalPrinters, printer]);
      };
    return(
        <>
            <Metadata/>
            <SPSONavBar/>



            <div className="container-fluid mt-5">
                <h1 className="text-center mb-4"><i className="bi bi-tools me-2"></i>Quản lý máy in</h1>


                <div className="card card-body mb-5">
                    <h3 className="text-info mb-3"><i className="bi bi-list-ul me-2"></i>Thêm máy in</h3>
                    <table className="table table-hover text-center">
                        <thead className="table-primary">
                            <tr>
                            <th>
                                <i className="bi bi-printer me-1"></i>Mô hình
                            </th>
                            <th>
                                <i className="bi bi-geo-alt-fill me-1"></i>Tòa
                            </th>
                            <th>
                                <i className="bi bi-gear-fill me-1"></i>Hành động
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {physicalPrinters.map((printer) => (
                            <ConnectPrinter key={printer.id} printer={printer} onConnect={connectPrinter} />
                            ))}
                        </tbody>
                    </table>
                </div>


                <div className="card card-body mb-5">
                    <h3 className="text-info mb-3"><i className="bi bi-link-45deg me-2"></i>Số máy in đã kết nối</h3>
                    <table className="table table-hover text-center">
                        <thead className="table-primary">
                            <tr>
                            <th>
                                <i className="bi bi-hash me-1"></i> ID Máy in
                            </th>
                            <th>
                                <i className="bi bi-printer me-1"></i>Mô hình
                            </th>
                            <th>
                                <i className="bi bi-geo-alt-fill me-1"></i>Tòa
                            </th>
                            <th>
                                <i className="bi bi-toggle-on me-1"></i>Trạng thái
                            </th>
                            <th>
                                <i className="bi bi-gear-fill me-1"></i>Hành động
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {connectedPrinters.map((printer) => (
                            <TogglePrinter
                                key={printer.id}
                                printer={printer}
                                onToggle={togglePrinterStatus}
                                onRemove={removePrinter}
                            />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}


export default SPSOPrinterManagement