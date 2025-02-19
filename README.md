# GoGym
## Introduction

GoGym is a Gym Training web application that allows users to register, log in, and explore training classes conducted by various trainers. Users can view detailed information about trainers, check their availability, and purchase packages. Integrated with Firebase for authentication and Stripe for secure payments, GoGym provides an efficient and seamless user experience.

Additionally, users can apply to become trainers, and administrators have the authority to manage requests. GoGym features three types of dashboards: **Admin**, **Trainer**, and **Member**, each tailored for its respective user type.

- [GoGym live link](https://gogym-652df.web.app) 


## Features

* User registration and login via Firebase Authentication.
* Trainer information pages with available time slots.
* Purchase gym packages with secure payments via Stripe.
* Role-based dashboards for Admin, Trainer, and Member:
* Admin Dashboard: Manage users, approve/reject trainer requests, and oversee operations.
* Trainer Dashboard: Manage training schedules and packages.
* Member Dashboard: Track memberships and packages purchased.
* Members can apply to become trainers.
* Admin review process for approving or rejecting trainer applications.


## npm packages

* MongoDB
* Firebase for Authentication
* React  Icons
* MaterialUI Tailwindcss
* React router dom
* React-simple-typewriter
* React modal
* rsweetalert2
* Stripe

## Usage

### User Roles and Dashboards
**Admin:**

* Manage users and memberships.
* Approve or reject trainer applications.

**Trainer:**

* Set available time slots and manage their schedule.
* Manage training packages for users.

**Member:**

* Explore available training classes and trainers.
* Purchase packages and make payments via Stripe.
* Apply to become a trainer.
* Payment Integration
* Payments are processed securely using Stripe. Ensure your Stripe API key is properly configured in the .env.local file.    

