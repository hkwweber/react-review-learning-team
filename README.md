# React Review for Hannah's Learning Team

### Please note: this review is for React ONLY - no Redux or React-Redux.

## Getting started

1. Fork and clone this repo
2. cd into the repo
3. `npm install`
4. Create a database called `meal-time` on your machine by running `createdb meal-time` in your command line (it doesn't matter what directory you're in when you run this)
5. I've created a seed file that populates your database with dummy data. You still don't have to worry about how to create a seed file. In order to populate your database with this seed file, run `npm run seed`. Only do this after you've created your db in step 4. Until you do this, you won't have any data to work with.
6. Look at your new database in Postico and see what data you have.
7. Start the application with: `npm run start:dev`
8. Start looking at things and adding, breaking, fixing, changing- whatever you want. Maybe try to make a simple diagram of the React components - think about which components render other child components and how data and functionality are passed around. I recommend console logging ALL OVER if you find something you're confused about.
9. If you're thinking, 'the process of passing state-update functionality all the way down to the Belly component is confusing and annoying', then now you understand why Redux is so helpful. It eliminates the need for that process.
10. If you don't have the React dev tools Chrome extension, get ittttttttt. It enables you to see a component's state and props, which components are currently rendering in the browser, and more cool stuff that makes debugging a million times easier.
