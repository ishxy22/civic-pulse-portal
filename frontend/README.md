

# SIH Project: Civic Pulse Admin Panel

This is the admin dashboard for the Civic Pulse application, a platform designed to monitor, manage, and resolve civic issues reported by citizens. This frontend provides administrators with the necessary tools to track new and ongoing issues, assign them to relevant departments, and update their statuses.

## Features

  * **Dashboard:** An overview of all reported issues.
  * **Issue Management:** View details, filter, and sort issues by category, status, or priority.
  * **User Actions:** Assign tasks, mark issues as resolved, accept, or reject reports.
  * **Responsive UI:** A clean and modern interface built with Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

  * [Node.js](https://nodejs.org/) (v18 or newer recommended)
  * [npm](https://www.npmjs.com/) (comes with Node.js)
  * [Git](https://git-scm.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### 1\. Clone the Repository

First, clone the repository to your local machine using Git.

```bash
git clone https://github.com/kanhaiya-98/SIH-PROJECT.git
```

### 2\. Navigate to the Project Directory

Move into the newly created project folder.

```bash
cd SIH-PROJECT
```

### 3\. Install Dependencies

This project has known peer dependency conflicts between its packages. To resolve this, you must use the `--legacy-peer-deps` flag during installation. This tells npm to use an older, less strict dependency resolution algorithm, which is required for this project to work correctly.

```bash
npm install --legacy-peer-deps
```

### 4\. Run the Development Server

Once the installation is complete, you can start the local development server.

```bash
npm run dev
```

This will start the application and make it available in your web browser. The terminal will display the local URL, which is typically **http://localhost:5173/**.

## Technologies Used

  * **Vite:** A next-generation frontend tooling for fast development.
  * **React:** A JavaScript library for building user interfaces.
  * **TypeScript:** A statically typed superset of JavaScript.
  * **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

-----
