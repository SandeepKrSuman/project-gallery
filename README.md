![hacktoberfest-banner](./public/assets/hacktoberfest2022.jpg)

## Contributing Guidelines

- **Plagiarism is strictly prohibited**. Write your own code. Take project inspirations from various resources but do not blindly copy paste them.
- Comment on the issue you prefer to work on and wait for it to be assigned to you.
- **Do not** work on any issue which is **not assigned** to you.
- Generally issue will be assigned on a _first come, first serve basis_. However if the issue is labeled 'beginner-friendly' it will preferebly be assigned to someone who is new to open source.
- You can create your own issue if you want to fix a bug, add new feature, add a project, etc. In that case too, wait for it to be assigned to you only then start working on it.
- **Do not create a Pull Request** without an issue assigned under your name.
- All PR's must be made from a branch. Do not use master branch for making a PR. Create a seperate branch before making a PR.
- Lastly, make sure everything works well before creating a PR. Do not touch or edit any other code which are not meant for you.

## Steps to Contribute

### Initial Steps

1. Star this repo and then **Fork** it. Forking this repo will create its copy to your own GitHub.
2. Go to the forked repo on your GitHub and copy the HTTPS URL by clicking on the **code** button which is highlighted in green colour.
3. Clone the forked repository by going to your terminal/ command line. Use `git clone <copied URL>`.
4. CD into `project-gallery`.
5. Run this command `git remote add upstream https://github.com/SandeepKrSuman/project-gallery.git`.
6. Create a new branch. `git checkout -b branchName`.

### Add a Project

1. Go to Projects folder present inside public `/public/Projects`.
2. Create a folder with your name followed by the project name. For example `SandeepJokeGenerator`. Follow PascalCase naming convention.
3. Put all the files - html, css, js, images, etc. - inside this created folder.
4. Make sure the html file is named `index.html`.
5. After completing the project implementation take a screen shot or gif of the project and paste it inside the assets folder present inside public `pubic/assets`. Adding a gif is preferred.
6. Create a `info.txt` file and add all the details carefully. Look at the template for reference.

### View Added Project

1. Copy the content of `info.txt` file that you have created in previous steps.
2. Go to `src/components/Data/Data.js` and paste the copied content at proper place and save it. This change is only for viewing the project and should be removed before commiting.
3. Run the App to view your project.

- Please undo all the changes you made to the `Data` folder before commiting i.e. remove the content you pasted inside `Data.js` file.

### Run the APP

```javascript
npm i && npm start
```

- App will run on <http://localhost:3000/>

### Final Steps

1. Run this command `git pull upstream master`.
2. Commit the relevant changes you made. Use `git add` and `git commit -m "your commit message"`. Do not commit the `Data.js` file.
3. Push you commits. `git push origin yourBranchName`.
4. Go to your forked GitHub repo. There you will see an option to create pull request.
5. Create pull request. Give relevant title and describe the changes you made.
6. Wait for your pull request to be merged.
