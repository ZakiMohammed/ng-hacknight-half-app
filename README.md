# Assignment: HacKnight - Angular Getting Started

Angular HacKnight app getting started.

![](https://raw.githubusercontent.com/ZakiMohammed/react-hacknight-half-app/master/banner.png)

## Problem Statement

A client has a requirement to create a HacKnight App which will allow participants to register them selves in an upcoming Hackathon event. 

The app will show the details of HacKnight in the home page. The app will also have a registration form where participants can register. Once filled the form the participants can see their name in the participants list page. The app will also come up with About and FAQ page. In case of any random route user will navigated to not found page. 

For the backend consider using json-server.

**Pages:**

- Home (Banner)
- Register
	- Full Name
	- Email
	- Country
	- GitHub Link
- Participants
- About
- Not Found

**Acceptance Criteria:**

- Complete the registration form
- Show the participants listing once registered on the participants page
- Show registration count and countries participants are from on the home page cards
- Navigate to about page from footer's button click
- Add environment files to the projects
- Create GitHub repository and share the project once completed

**NFR (Non Functional Requirements):**

- Show appropriate error messages
- Show loader where ever required
- Provide error handling support

## Run Application
```
npm start
```

## Initial Setup

```
ng g new hacknight-app --standalone=false

? Which stylesheet format would you like to use? Sass (SCSS)
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? no
```

## Add Dependencies

```
npm i bootstrap
npm i bootstrap-icons
npm i bootswatch

npm i uuid
```