
---

### **Classes and Descriptions**

1. **SPSOView (Base Class)**
    
    - **Attributes**:
        - `SPSOID: int`: Represents the unique identifier for an SPSO (Shared Printer System Operation).
    - **Purpose**: Acts as a base class for other views, providing common functionality for all SPSO-related views.
    - **Relationships**:
        - Extended by `SPSOLogsView`, `SPSOPrintersView`, and `SPSOSettingsView`.
2. **SPSOLogsView (Derived from SPSOView)**
    
    - **Methods**:
        - `viewLogSortedByStudent(searchString?): void`: Displays logs filtered or sorted by student name or ID.
        - `viewLogSortedByPrinter(searchString?): void`: Displays logs filtered or sorted by printer name or ID.
    - **Purpose**: Provides a user interface for viewing and filtering printer logs.
3. **SPSOPrintersView (Derived from SPSOView)**
    
    - **Methods**:
        - `viewConnectedPrinters(): void`: Displays printers currently connected to the SPSO.
        - `viewAvailablePrinters(): void`: Displays printers available for connection.
        - `connectPrinter(printerID): void`: Connects a specified printer to the SPSO.
        - `disconnectPrinter(printerID): void`: Disconnects a specified printer from the SPSO.
        - `turnOnPrinter(printerID): void`: Turns on a specified printer.
        - `turnOffPrinter(printerID): void`: Turns off a specified printer.
    - **Purpose**: Manages printers connected to the system and their statuses.
4. **SPSOSettingsView (Derived from SPSOView)**
    
    - **Methods**:
        - `viewSettings(): void`: Displays the current settings of the SPSO.
        - `addAllowedType(typeName): void`: Adds a new allowed document type for printing.
        - `removeAllowedType(typeName): void`: Removes a document type from the allowed list.
        - `setNumberOfPapers(num): void`: Sets the maximum number of papers allowed for a session.
        - `setDateToGivePapers(date): void`: Sets the date for giving papers to the printers.
    - **Purpose**: Provides configuration and management of SPSO settings.
5. **SPSOLogsController**
    
    - **Methods**:
        - `getLogSortedByStudent(searchString?): List<Log>`: Retrieves logs filtered or sorted by student name or ID.
        - `getLogSortedByPrinter(searchString?): List<Log>`: Retrieves logs filtered or sorted by printer name or ID.
    - **Purpose**: Acts as a controller to fetch log data for the view layer.
6. **SPSOPrintersController**
    
    - **Methods**:
        - `getConnectedPrinters(SPSOID): List<Printer>`: Gets a list of printers connected to a specific SPSO.
        - `getAvailablePrinters(): List<Printer>`: Gets a list of printers available for connection.
        - `connectPrinterToSPSO(printerID, SPSOID): void`: Connects a printer to a specified SPSO.
        - `disconnectPrinter(printerID): void`: Disconnects a printer.
        - `turnOnPrinter(printerID): void`: Turns on a printer.
        - `turnOffPrinter(printerID): void`: Turns off a printer.
    - **Purpose**: Handles printer-related operations between the database and views.
7. **Settings**
    
    - **Attributes**:
        - `allowedType: vector<String>`: A list of allowed document types for printing.
        - `numberOfPapers: int`: Maximum number of papers allowed for a session.
        - `dateToGivePapers: date`: Date when papers are supplied.
    - **Methods**:
        - `getInfo(): Settings`: Retrieves current settings.
        - `addAllowedType(typeName): void`: Adds a document type to the allowed list.
        - `removeAllowedType(typeName): void`: Removes a document type from the allowed list.
        - `setNumberOfPapers(num): void`: Sets the number of allowed papers.
        - `setDateToGivePapers(date): void`: Updates the date for giving papers.
    - **Purpose**: Stores and manages configuration data for the SPSO.
8. **Printer**
    
    - **Attributes**:
        - `printerID: int`: Unique ID of the printer.
        - `printerBrand: String`: Brand of the printer.
        - `printerModel: String`: Model of the printer.
        - `printerDescription: String`: Description of the printer.
        - `printerLocation: String`: Physical location of the printer.
        - `SPSOID: int`: ID of the SPSO to which the printer is connected.
        - `printerStatus: bool`: Indicates whether the printer is on (true) or off (false).
    - **Methods**:
        - `connectSPSO(SPSOID): void`: Connects the printer to a specified SPSO.
        - `disconnect(): void`: Disconnects the printer.
        - `turnOn(): void`: Turns the printer on.
        - `turnOff(): void`: Turns the printer off.
        - `getInfo(): Printer`: Retrieves printer information.
    - **Purpose**: Represents a physical printer and its operations.
9. **Log**
    
    - **Attributes**:
        - `logID: int`: Unique identifier for the log entry.
        - `studentID: int`: ID of the student associated with the log entry.
        - `studentFullName: String`: Full name of the student.
        - `printerID: int`: ID of the printer used.
        - `printerModel: String`: Model of the printer used.
        - `printerLocation: String`: Location of the printer used.
        - `numberOfPagesPrinted: int`: Number of pages printed.
        - `printDate: date`: Date of the print job.
    - **Methods**:
        - `getInfo(): Log`: Retrieves log information.
    - **Purpose**: Represents a log entry for printing activities.
10. **Database**
    
    - **Attributes**:
        - Contains collections for `Logs`, `Printers`, and `Settings`.
    - **Purpose**: Acts as the data storage for the entire system.
    - **Relationships**:
        - Aggregates `Log`, `Printer`, and `Settings`.

---

### **Design pattern**
Facade
