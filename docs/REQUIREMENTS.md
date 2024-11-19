# Requirement Elicitation

## Table of Contents
- [Requirement Elicitation](#requirement-elicitation)
  - [Table of Contents](#table-of-contents)
  - [Domain Context](#domain-context)
  - [Stakeholders and Needs](#stakeholders-and-needs)
  - [Functional Requirements](#functional-requirements)
  - [Non-Functional Requirements](#non-functional-requirements)
  - [System Use-case Diagram](#system-use-case-diagram)
  - [Transaction Module](#transaction-module)

## Domain Context
In today’s academic environment, students frequently need to print a large number of documents such as: lecture notes, project reports and lecture books. In Ho Chi Minh City University of Technology, many students rely on photocopy stores located outside the campus to print their materials. This reliance has some challenges: the first one involves traveling to and from the stores, then waiting for their turn since the store also serves other customers than the student. This process can be time consuming especially for students who have tight schedules.  Additionally, the stores use third-party apps like Zalo to receive files from the customer, which will then be downloaded to the store’s computers. Since the computers are freely accessible to the customer, this obviously raises some concern about sensitive documents. These issues show the necessity of a specialized printing service for the students, a  Student Smart Printing Service (HCMUT_SSPS) that can provide convenience by offering web-based and mobile app services, and security by utilizing Student’s ID authentication.


## Stakeholders and Needs
1. Students
HCMUT students are the primary stakeholders of the Students Smart Printing Service (SSPS), they need a system that is understandable, safe and convenient to use to help them with the printing of documents for studying and other purposes. Students can choose a printer, upload files and modify printing properties like paper size, pages to be printed, one/double-sided, number of copies, etc. Students also have access to their printing logs with a summary of the number of printed pages for each page size and if they meet their account balance, they should be able to make purchases for more through online payments systems like BKPay. The HCMUT_SSPS will be able to bring students a fast and effective way of printing necessary documents for their own use instead of having to leave the campuses.
2. Student Printing Service Officer (SPSO)
Student Printing Service Officers (SPSO) are responsible for ensuring the smooth operation of SSPS and monitoring printing activities on the system. The officers need to have control over the system and can make decisions on adding, enabling or disabling printers around the campus. They should also have  the ability to configure file types that are allowed for uploading and can set default printing features like number of pages and the dates that the system will give the default number of pages to all students. Furthermore, the SPSO can also access students’ printing history and have the system automatically generate reports of the printing service usage monthly for administrative purposes. These requirements are essential for the SPSO to operate efficiently.
3. University Administration
HCMUT University administration is interested in providing students with a reliable and efficient printing service. They are the governance body that handles the planning, budgeting of the system and assigning officers to manage it. The administration needs the system to comply with relevant regulations and standards, it should have high maintainability, minimal downtime, clear documentation for troubleshooting and have frequent updates to fix bugs in the system keeping it in perfect condition. University administration is also in control of existing systems that are required for this printing service like HCMUT’s Single Sign-On (SSO) for authentication and BKpay for making online payment. These integrations ensure a safe and secure experience for users and provide students with a convenient means of obtaining printed documents.
4. BKPay system
BkPay system is the official HCMUT online payment system used by the students for money transactions within the university such as medical insurance bills, tuition fees, and other university related expenses. The BKPay system, as it predates the Student Smart Printing Service, requires that latter to be integrated properly into the already existing systems. 
5. HCMUT_SSO authentication 
The HCMUT_SSO Authentication Service is the university's single sign-on system that is responsible for managing user authentication across all university applications including the HCMUT_SSPS and BKPay system. It provides convenience and a secure way for students and staff to access the school's various services using only a single HCMUT account that was provided by the university. The HCMUT_SSO also requires the Student Smart Printing Service to be integrated properly.

## Functional Requirements
1. HCMUT Students
-The system allows students to upload a document file onto the system. 
-The system allows the students to see each printer's status (In use, how many people are waiting for their turn, disabled, available ). 
-The system allows students to choose a printer. 
-The system put the student in a queue. 
-The system allows students to specify the printing properties (paper size, pages to be printed, one/double sides, number of copies, etc). 
-The system allows students to see the printing progress (current page, current file being printed, progress bar). 
-The system allows students to stop the printing process. 
-The system allows students to view his/her printing log for a time period together with a summary of the number of printed pages for each page size. 
-The system allows students to buy more printing paper  using the feature Buy Printing Pages and pay through some online payment system (BKPay). 
-The system allows the students to view their printing paper balance. 
2. Student Printing Service Officer (SPSO)
-The system shall allow the SPSO to define and limit the types of files permitted for printing. 
-The system shall enable the SPSO to add new printers to the system. 
-The system shall allow the SPSO to enable or disable existing printers. 
-The system allows the SPSO to change the default number of pages that will be provided to the students. 
-The system allows the SPSO to change the dates that the system will give the default number of pages to all students. 
-The system shall allow the SPSO to view detailed printing histories for all students or individual students over specified time periods and for selected printers. 
-The system shall provide the SPSO with comprehensive reports on the usage statistics of the printing system. 
3. University Administration 
-The system shall allow the University Administration to schedule system maintenance and updates to ensure minimal downtime and smooth operation of the printing service. 
-The system shall notify the University Administration of system issues such as broken printers, lack of printing papers, or lack of ink. 
-The system shall provide the changes history of the system itself so that the University Administration can track the changes of the system as it receives updates.  
4. BKPay system
-The system updates the student's printing page balance immediately after a successful transaction through BKPay. 
-The system logs all financial transactions processed through BKPay.  
5. HCMUT_SSO authentication
-The system  authenticates all users through the HCMUT_SSO authentication service, when they log in, before granting access to any features of the printing service. 
-The system supports single sign-on functionality, allowing users already authenticated via HCMUT_SSO to access the printing service without additional login prompts. 

## Non-Functional Requirements
1. Performance
-The system should provide fast response times when students upload files, choose printers, and configure print options. 
-The system should handle multiple students using it simultaneously without significant slowdowns. 
Printing requests should be sent to the printers with minimal delay (under 2 seconds). 
2. Security
-All users (students and officers) must be securely authenticated via the HCMUT SSO before accessing any features. Sensitive data like login credentials and account information should be encrypted. 
-Students' personal data, payment information, and printing logs should be protected. Sensitive data should be encrypted both at rest and in transit. 
-Only authorized users (SPSO) should be able to access certain features. 
-The system should log all critical actions like changes to printer configurations, payment transactions,… for audit purposes. 
3. Usability
-Both the web and mobile applications should have intuitive user interfaces so that students can easily upload documents, choose printers, and track print usage without extensive training. 
-The mobile app should provide a smooth user experience across various devices, adapting to different screen sizes and resolutions. 
-The system should provide clear and timely feedback to users about the status of their actions, such as when a file is uploaded, when a print job is completed, or if any errors occur. 
4 .Maintainability
-The system should be designed in a modular way so that new features or printers can be added without affecting existing functionality. For example, adding support for new file types or printing options should be straightforward. 
-The system should provide detailed logs for debugging and monitoring purposes. This will help the IT department quickly identify and resolve issues. 
-Software updates, such as adding new features or fixing bugs, should be easy to deploy with minimal downtime.

## System Use-case Diagram 
![System use case daigram](./images/REQUIRE_System%20Use%20case.png)
## Transaction Module
![System use case daigram](./images/REQUIRE_Transaction%20Module.png)