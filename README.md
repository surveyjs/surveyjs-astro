# SurveyJS + Astro Quickstart Template

Build forms and surveys in Astro with SurveyJS. This quickstart template demonstrates how to add a drag-and-drop form builder to an [Astro](https://astro.build/) application using [Vue islands](https://docs.astro.build/en/guides/integrations-guide/vue/), render dynamic forms, export surveys to PDF, and visualize survey results with charts and tables using the following SurveyJS components:

- [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview)
- [Survey Creator / Form Builder](https://surveyjs.io/survey-creator/documentation/overview)
- [SurveyJS Dashboard](https://surveyjs.io/dashboard/documentation/overview)
- [SurveyJS PDF Generator](https://surveyjs.io/pdf-generator/documentation/overview)

> SurveyJS UI components use `client:only="vue"` because Survey Creator and Dashboard touch browser APIs during prerender (`navigator` / `document`).

## Run the Application

```bash
git clone https://github.com/surveyjs/surveyjs-astro.git
cd surveyjs-astro
npm i
npm run dev
```

Open http://127.0.0.1:4321/ in your web browser.

## Template Structure

This template covers most basic use cases. You can find code examples for them in the following files:

- Create a standalone survey
  - [data/survey_json.js](data/survey_json.js)
  - [src/components/SurveyForm.vue](src/components/SurveyForm.vue)
- Add Survey Creator to a page
  - [src/components/SurveyCreator.vue](src/components/SurveyCreator.vue)
- Export a survey to a PDF document
  - [src/components/PdfExport.vue](src/components/PdfExport.vue)
- Visualize survey results
  - As charts
    - [data/dashboard_data.js](data/dashboard_data.js)
    - [src/components/DashboardPanel.vue](src/components/DashboardPanel.vue)
  - As a table
    - [data/dashboard_data.js](data/dashboard_data.js)
    - [src/components/DashboardTabulator.vue](src/components/DashboardTabulator.vue)

## Related Resources

- [SurveyJS Website](https://surveyjs.io/)
- [SurveyJS Documentation](https://surveyjs.io/documentation)
- [What's New in SurveyJS](https://surveyjs.io/WhatsNew)
