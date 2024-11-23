<img src="./docs//images/bk_name_en.png" alt="Project Banner" width="100%" />


# Student Smart Printing Service

**********************

## Table of Contents
- [Student Smart Printing Service](#student-smart-printing-service)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Getting Started](#getting-started)
  - [Documentation](#documentation)
  - [Contribution](#contribution)
      - [Step 1: Environment](#step-1-environment)
      - [Step 2: Install Dependencies](#step-2-install-dependencies)
      - [Step 3: Run the Development Server](#step-3-run-the-development-server)
  - [Contributors](#contributors)

**********************

## Description
HCMUT_SSPS (Student Smart Printing Service) is a convenient, smart printing solution for students at HCMUT.

- **Printer Network**: Multiple printers located in different buildings within the campus, each printer is identified by ID, brand, model, and location details (campus, building, room).

- **Easy Document Printing**: Students can upload files, choose a printer, and customize printing options (paper size, specific pages, single/double-sided, number of copies, etc.). Supported file types are managed by the Student Printing Service Officer (SPSO).

- **Printing Logs**: Tracks all printing activities.

- **Student Page Balance**: 
  - Each students receive a default number of A4 pages each semester.
  - Extra pages can be purchased using the "Buy Printing Pages" feature, with payment handled by the pre-existing BKPay system.


- **Features for SPSO**:
  - Manage printers (add, enable, disable).
  - Configure system settings (default page, allowed file types, configure dates for default page  allocation).
  - Generate monthly reports for the whole system.

- **Access Control**: All users are authenticated through the HCMUT_SSO service.

The system is accessible via both a web-based app and a mobile app, ensuring ease of use for students and administrators alike.

**********************

## Getting Started
``` 
TBD
```

**********************

## Documentation

Detailed documentations about the project:
-  [Installation Guide](docs/installation.md)
-  [Requirement](docs/REQUIREMENTS.md)
-  [Modelling](docs/MODELLING.md)
-  [Architecture](docs/ARCHITECHTURE.md)

**********************

## Contribution
1. **Create a new branch**:
   - **Features**: `feature/your-feature-name`
     - Example: `feature/buy-printing-pages`
   - **Bug Fixes**: `fix/issue-description`
     - Example: `fix/login-crash`
   - **Documentation**: `docs/description`
     - Example: `docs/update-requirements`

2. **Commit Messages**:
   Follow this style of commit messages:
   - `feat: add buy paper`
   - `fix: resolve login crash issue`
   - `docs: update modelling description`
3. **Web Development**:
   #### Step 1: Environment
   - Ensure you have  installed
     - [Node.js](https://nodejs.org/)
     - npm (comes with Node.js)

   #### Step 2: Install Dependencies
   - Navigate to the project directory:
     ```bash
     cd code
     ```
   - Install the required dependencies:
     ```bash
     npm install
     ```

   #### Step 3: Run the Development Server
   - Start the `vite` development server:
     ```bash
     npm run dev
     ```

**********************

## Contributors
|  **Contributor**     | 🔗 **GitHub Profile**                          |
|----------------------|------------------------------------------------|
| 🧑‍💻 Nguyen Anh Khoa   | [RestingWiki](https://github.com/RestingWiki)  |
| 🧑‍💻 Nguyen Duc Nguyen | [nguyen875](https://github.com/nguyen875)      |
| 🧑‍💻 Ngo Bao Ngoc      | [Hayzen2](https://github.com/Hayzen2)          |
| 🧑‍💻 Ngo Hao Hong Du   | [DaauShen](https://github.com/DaauShen)        |
| 🧑‍💻 Nguyen Anh Kiet   | [kiet-na](https://github.com/kiet-na)          |


