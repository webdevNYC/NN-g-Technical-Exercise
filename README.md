# TypeScript Next.js example

This is a really simple project that shows the usage of Next.js with TypeScript.

Title: Implementation of Interactive Panel Widget for Online Course Details

Description:

In response to the technical exercise for the NN/g Senior Frontend Developer Application, I've developed a prototype for an interactive panel widget. This panel, designed with React, enhances a webpage that showcases details of an online course.

Development Experience (DX):

For an efficient development workflow, I utilized Visual Studio Code with Pretty Formatting enabled to ensure code cleanliness. The project was deployed using Vercel for streamlined, hassle-free hosting. Figma DevMode played a crucial role in emulating specific Tailwind CSS styles, allowing me to refine and consolidate styles to avoid redundancy effectively.

Project Stack:

NextJS: Chosen for its robust routing capabilities and server-side functionalities. Its API routes feature simplifies server-side operations, allowing direct database queries without exposing API paths, thereby enhancing security. A NextJS boilerplate facilitated the integration of TypeScript, streamlining the setup process.
TypeScript: Leveraged for its ability to enforce type safety, improving code readability, maintainability, and reducing the likelihood of bugs.
Tailwind CSS: Selected for its user-friendly approach to styling, significantly speeding up development time, particularly for responsive design.

Project Details:
pages/course/[id]: A dynamic page that renders course options based on the CourseId.

utils/course-sample-data.tsx: Defines course options including CourseId, enabling easy data management and manipulation.tailwind.config.js: Customizes the Tailwind color palette for consistent styling across the project.

utils/icons.tsx: Houses all SVG icons used throughout the project, centralizing graphic resources.

utils/utils.tsx: Contains utility functions, including date formatting to meet project requirements.

pages/api/course: Facilitates API interactions, abstracting server-side logic.

components/CourseCard: Render's course option cards, utilizing dateFormat for accurate date presentations and receiving props for dynamic content display.components/CourseOptions: Maps over the course data to render each CourseCard, incorporating form functionality and state management.

components/FavoriteButton: Demonstrates API interaction for saving or removing courses from a user's profile using fetch. This choice was made to illustrate traditional fetch usage outside of NextJS's API Routes.

styles/index.css: Integrates Tailwind styles, ensuring a consistent and responsive design framework.

Conclusion:

This project shows my dedication to making effective and scalable web apps. I used NextJS, TypeScript, and Tailwind CSS to build a strong foundation for the app. My way of organizing components and handling API calls shows my skill in creating detailed front-end solutions.
