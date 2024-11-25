# Introduction
This project is a crypto market that allows users to browse cryptocurrency prices, apply filters, and sort data effectively. 
The application provides a seamless experience across desktop and mobile devices, offering performance optimizations and user-friendly UI/UX.

## Getting Started
You can view the live demo of the application here:
[Crypto Market Demo](https://pintoo-market.vercel.app/)
> **Important**:
    to access the demo link, you may need to bypass CORS restrictions for the API. Install the [Chrome extension Allow CORS](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) from the Chrome Web Store and enable it.

### Installation

1.	Clone the repository:

```bash
git clone https://github.com/haryanapnx/pintoo-market.git
cd pintoo-market
```

2.	Install dependencies:
```bash 
npm install 
```


3.	Run the development server:
```bash 
npm start 
```


4.	Build the application:
```bash 
npm run build 
```


5.	Run test:
```bash 
npm test 
```

## Technologies and Packages
The following technologies and libraries were used in the project:
- **React + Typescript**
- **React Query**
- **Tailwind CSS**
- **Axios**
- **React Icons**
- **react-hot-toast**

## Improvements

Several enhancements were implemented to improve functionality, responsiveness, and usability:

1.	Floating Filter for Mobile View:
    - A filter dropdown is added for mobile users.
    - The filter remains fixed at the bottom of the screen when scrolling.
    - Provides a better UX for users filtering data on smaller screens.
2.	Back-to-Top Button:
    - A floating button that appears when users scroll down.
    - Allows users to quickly navigate back to the top of the page.
    - Includes smooth scrolling and responsive visibility logic.
3.	Sort by Name:
    - Implemented dynamic sorting by name, with ascending/descending order.
    - Query parameters are updated in the URL to persist sorting across sessions.
4.	Custom Loadable Component:
    - A custom loadable utility was created for lazy loading components.
    - It uses React's Suspense and lazy to split code and reduce initial load time.
    - A spinner is used as a fallback for a better user experience.

## Decisions and Tradeoffs

**React Query vs Redux**
- Decision: Chose React Query for server-state management due to its optimized caching and refetching strategies.
- Tradeoff: React Query is primarily focused on server-side data, so additional work is needed for managing client-side state (handled via Context API).

**Floating Filter for Mobile**
- Decision: Implemented a floating dropdown for mobile filtering instead of traditional inline filters.
- Tradeoff: Added complexity in terms of managing floating positions and scroll behaviors but significantly improved mobile UX.

**Custom Loadable Component**
- Decision: Built a custom loadable function instead of using libraries like react-loadable.
- Tradeoff: Provides full control over lazy loading behavior and fallback rendering but requires manual maintenance.

**Tailwind CSS**
- Decision: Used Tailwind CSS for styling due to its utility-first approach.
- Tradeoff: Requires familiarity with utility classes, but it drastically improves development speed and maintains a consistent design system.

**Using Context API for State Management**
- Decision: Opted for Context API instead of Redux for simplicity.
- Tradeoff: Limited to small to medium-scale applications. For larger applications, Redux or other state management libraries might be more suitable.

