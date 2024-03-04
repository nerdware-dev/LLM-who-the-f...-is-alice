# How to setup context with Notion

1. Setup a Notion account and workspace with some data you want to import with Langchain
2. Setup Notion Integration
   - [Link to your Notion Integrations](https://www.notion.so/my-integrations) 
   - Create your integration with a name and image (optional)
   - Add `Internal Integration Secret` to `.env` file at the root of the project
3. In Notion: 
   - Go to your Notion Page / Database and click on the Settings (Three dots: `...`) in the upper right corner
   - Go down to `Connections`
   - Click on `Connect to` 
   - Select your recently created integration
4. Get the ID of your Notion DB / Page 
    - ([How to get ID of page/DB](https://developers.notion.com/docs/working-with-page-content#:~:text=Here's%20a%20quick%20procedure%20to,can%20take%20a%20closer%20look.))
    - Add it to the `.env` file at the root of the project. 
5. Run `node seed_db_notion.js` and wait for it to finish importing. 
    - If it takes to long or you run into rate limits play around with the `NOTION_MAX_CONCURRENCY` variable in the `.env` file. 
6. Finally you should be able to run `node chat.js` and ask questions with the new imported context
   - Note: The question currently is still hard coded in  `chat.js` file and needs to be updated beforehand