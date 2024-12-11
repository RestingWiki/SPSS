# System Modelling

## Table of Contents
- [System Modelling](#system-modelling)
  - [Table of Contents](#table-of-contents)
  - [Activity Diagrams](#activity-diagrams)
    - [Manage Printers](#manage-printers)
    - [View Student Logs](#view-student-logs)
    - [Change System Configurations](#change-system-configurations)
  - [Sequence diagram](#sequence-diagram)
    - [Manage Printers](#manage-printers-1)
    - [View Student Logs](#view-student-logs-1)
    - [Change System Configurations](#change-system-configurations-1)
  - [Class diagram](#class-diagram)
    - [Design pattern used: Facade](#design-pattern-used-facade)
  - [User Interface](#user-interface)





## Activity Diagrams
### Manage Printers
![Manage Printer](./images/MODEL_ManagePrinter.png)

### View Student Logs
![View Student logs](./images/MODEL_ViewLogs.png)

### Change System Configurations
![Change system config](./images/MODEL_ChangeSystemConfig.png)

## Sequence diagram

### Manage Printers 
![Manage Printers](./images/MODEL_ManagePrinters.png)
1. **Displaying initial printer status:**
    - The SPSO chooses the **View printer** tab.
    - The SPSOPrinterView signals the PrinterController to retrieve information about available and logically connected printers by asynchronously calling `getAvailablePrinter()` and `getConnectedPrinter()`.
    - The PrinterController continues by requesting printer data from the PrinterModel by calling `getInfo()`.
    - The PrinterModel then gets the printers data from the PrinterDatabase using the `getPrinterList()` method.
    - The PrinterDatabase returns the list of printers. The PrinterModel sends the data back to the PrinterController, which continues to relay it to the SPSOPrinterView for display to the SPSO.

2. **Managing printers:**
    - The SPSO has two choices for interacting with the printers:
        a. Add/Connect a printer, meaning students will be able to see this new printer in their views.
        b. Change the state of an existing printer from offline to online or the opposite.

3. **Alternative flow: Adding a New Printer**
    - If the SPSO chooses to add a new printer, they will select the unused printer from the previously updated view.
    - The SPSOPrinterView calls the `connectPrinterToSPSO()` method on the PrinterController.
    - The PrinterController signals the PrinterModel to connect to **SPSS**.
    - The PrinterModel finally updates the printer status in the PrinterDatabase using the `updatePrinterInfo()` method.

4. **Alternative flow: Changing a Printer State**
    - If the SPSO decides to change the state of a printer instead, they will use the SPSOPrinterView, which displays a list of printers online/offline connected to SPSS.
    - The SPSO selects one of these printers and can take one of the following actions:
        a. Turn the printer **on** by calling the `turnOnPrinter()` method.
        b. Turn the printer **off** by calling the `turnOffPrinter()` method.
    - The PrinterController calls the corresponding method (`turnOn()` or `turnOff()`) on the PrinterModel, which updates the printer status in the PrinterDatabase using the `updatePrinterInfo()` method.


### View Student Logs
![View Student Logs](./images/MODEL_ViewStudentLogs.png)
1. **Displaying initial log tables:**
    - The SPSO chooses the **SPSOLogsView** tab and selects one of two options:
        a. View **student logs**.
        b. View **printer logs**.

2. **Alternative flow: Viewing Student Logs**
    - The SPSO selects the *View Student Logs* option.
    - The SPSOLogsView calls the `getLogSortedByStudent()` method on the LogController.
    - The LogController requests the log data by calling the `getInfo()` method on the LogModel.
    - The LogModel retrieves the log data from the LogDatabase using the `getLogTable()` method.
    - The LogDatabase returns the log data to the LogModel, which moves it back to the LogController.
    - The LogController sends the log data to the SPSOLogsView, which displays the student logs to the SPSO.
    - The SPSO can apply filters to the retrieved log data.
    - Once filtered, the SPSOLogsView calls `updateStudentView()` to refresh the displayed logs, showing the updated log view.

3. **Alternative flow: Viewing Printer Logs**
    - The SPSO selects the *View Printer Logs* option.
    - The SPSOLogsView calls the `getLogSortedByPrinter()` method on the LogController.
    - Similarly, the LogController retrieves the printer logs by calling the `getInfo()` method on the LogModel.
    - The LogModel gets the data from the LogDatabase using the `getLogTable()` method.
    - The LogDatabase returns the data to the LogModel, which forwards it to the LogController.
    - The LogController provides the log data to the SPSOLogsView, which then displays the printer logs to the SPSO.
    - The SPSO can apply filters to the log data.
    - Once filtered, the SPSOLogsView calls `updateStudentView()` to refresh the displayed printer logs with the updated view.


### Change System Configurations
![Change System Configurations](./images/MODEL_ChangeSystemConfigurations.png)
1. **Displaying initial system settings:**
    - The SPSO clicks the *Change System Settings* option.
    - The SPSOSettingsView calls the `getSetting()` method on the SettingsController to retrieve the current settings.
    - The SettingsModel retrieves the settings from the **SSPS** using `getSystemSettings()`.
    - The retrieved settings are passed back to the SPSOSettingsView to be displayed to the SPSO.

2. **Configuring System Settings:**
    - The SPSO has multiple choices for modifying system settings:

    a. **Adding New Valid File Types:**
        - The SPSO selects the option to add new valid file types.
        - The SPSOSettingsView calls the `addAllowedFileType()` method on the SettingsController.
        - The SettingsController calls `addAllowedFileType()` on the SettingsModel, which updates the system settings in the SSPS with the `updateSystemSettings()` method.

    b. **Changing Default Page Allocation:**
        - The SPSO selects the option to change the default page allocation.
        - The SPSOSettingsView calls the `setNumberOfPapers()` method on the SettingsController.
        - The SettingsController calls `setNumberOfPapers()` on the SettingsModel to change the allocation setting in the SSPS via the `updateSystemSettings()` method.

    c. **Changing Page Allocation Date:**
        - The SPSO selects the option to change the page allocation date.
        - The SPSOSettingsView calls the `setDateToGivePapers()` method on the SettingsController.
        - The SettingsController calls `setDateToGivePapers()` on the SettingsModel, which modifies the allocation date in the SSPS using the `updateSystemSettings()` method.


## Class diagram
### Design pattern used: Facade
![Class Diagram](./images/CLASS-PrintingManagementModule.png)
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
        - Associates `Log`, `Printer`, and `Settings`.

## User Interface
**[Figma design for the complete UI](https://www.figma.com/design/6NVehmXsGFwxde0R8Yqu7m/CC01_group_6_wireframe?node-id=0-1&node-type=canvas&t=eKPUv3VF8FcQxwWT-0)**