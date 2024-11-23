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
- The sequence diagram illustrates the process of managing printers within a system that involves SPSO and the Student Smart Printing Service (SSPS). This process including the following steps:
  - The SPSO first send a message to the SSPS to manage the printers
  - Then the SPSO will have 2 options to manage the printer: adding new printers or changing the printer status.
    - If the SPSO chooses to add a new printer, the SSPS will respond by displaying the unused printers. The SPSO can select the unused printer and change printer state to online.
    - If the SPSO chooses to change the printer state, the SSPS will display the online printers to the SPSO. To continue the process, the SPSO will then select the online printer, at this stage, the SPSO can have 2 options: set printer state to enable or disable.
  - The SSPS will then reply to the message by asking the SPSO to confirm the change. If the SPSO sends a message to confirm the change, the change will be updated and the SSPS will reply to SPSO by notifying the change is updated.

### View Student Logs
![View Student Logs](./images/MODEL_ViewStudentLogs.png)
- The sequence diagram illustrates the process of viewing logs within a system that involves SPSO and the Student Smart Printing Service (SSPS), the process including the following steps:
  - The SPSO first sends a message to the SSPS to view the logs.
  -	The SPSO will have 2 options to view the logs: viewing the logs grouped by students or grouped by printers.
    - If the SPSO chooses to view the logs grouped by students, the SSPS will respond by displaying the students log.
    -	If the SPSO chooses to view the logs grouped by printers, the SSPS will respond by displaying the printers log.
  - The SPSO can then filter the log in the way they want to review. The SSPS will reply by sending the filtered log to the SPSO.

### Change System Configurations
![Change System Configurations](./images/MODEL_ChangeSystemConfigurations.png)
- The sequence diagram illustrates the process of changing system configurations within a system that involves SPSO and the Student Smart Printing Service (SSPS). This process including the following steps:
  - The SPSO first sends a message to the SSPS to change the system configurations.
  -	Then the SPSO will have 3 options to manage the printer: changing the default pages provided to the students, defining the valid file types to print and changing the page allocation default date.
    -	If the SPSO chooses to change the default pages provided, the SPSO will enter the new default number of pages.
    - If the SPSO chooses to define valid file types, the SPSO will enter the valid file extension.
    - If the SPSO chooses to change page allocation default date, the SPSO will enter new dates.
  - The SSPS will then ask the SPSO to confirm the change.
  - If the SPSO confirms the change the SSPS will then reply by notifying the change is updated.

## Class diagram


## User Interface
**[Figma design for the complete UI](https://www.figma.com/design/6NVehmXsGFwxde0R8Yqu7m/CC01_group_6_wireframe?node-id=0-1&node-type=canvas&t=eKPUv3VF8FcQxwWT-0)**