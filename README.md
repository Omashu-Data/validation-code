This repo is aimed to facilitate the creation, distribution and analysis of Google Forms through use of
Google Apps Script (GAS) for validating various results with the users.

# Requirements
This code has been developed with ES5, clasp and GAS.
clasp is used to push code to GAS for execution.

# Usage
Better usage will be implemented in the future. As the code stands, you have to manually hardcode lots of data
for creating the forms, assigning the database, filtering through it and so on.

`main.js`: contains the filters you want to apply to your data, the url of a Google Sheets (GS) file with all the data, the name of the folder where the forms and the GS with the answers will be stored and the name of the GS file that will store the Google Form's (GF) responses.

`create form.js`: handles all the logic regarding GF's ceation (title, questions, etc.).

`/data`: contains the logic regarding the acquirement of the data.

`/metrics`: contains hardcoded metrics and the logic regarding the treatment of the different metrics.