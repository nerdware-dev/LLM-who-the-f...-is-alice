# Who the F... is Alice? 🐇🎩🍄

Welcome to "Who the F... is Alice?", a repository dedicated to getting your first touch with [Langchain](https://www.langchain.com/). This project consists of two main parts:

1. **Data Seed**: This part involves loading a text file. In this example, we're using the book "Alice in Wonderland". 📖
2. **Chat.js**: This is where you can ask your model questions about the ingested data. 🗣️

## Getting Started 🚀

To run this application, you'll need to have an OpenAI API key. If you don't have one, you can get it from the [OpenAI website](https://platform.openai.com/api-keys).

### Installation 📦

First, clone this repository:
```bash
git clone https://github.com/yourusername/who-the-f-is-alice.git
```
Then, navigate into the project directory and install the dependencies:
```bash
cd who-the-f-is-alice
npm install
```
### Usage 🎮

To seed the data, run the following command:
```bash
node seed-db.js
```
To start the chat, run:
```bash
node chat.js
```
Enjoy exploring Wonderland with Alice! 🎉

# Be Creative! 🎨

This project is not limited to "Alice in Wonderland". You can ingest any text data you want! For example, you could export some pages from Notion, convert them to text, and ingest them into the model. Then, you can ask your model questions about the content you've ingested.

Here's how you can do it:

1. Export your desired pages from Notion as Markdown or HTML.
2. Convert the exported files to plain text. You can use an online converter or write a script to do this.
3. Replace the "Alice in Wonderland" text file with your new text file in the data seed script.
4. Run the data seed script to ingest your new data into the model.
5. Start the chat and ask your model questions about your Notion pages!

Remember, the sky's the limit with what you can do. Be creative and explore different possibilities! 🚀

## Further links 🖇️
- [Prompt Engineering Guide](https://www.promptingguide.ai/de)
- [LangChain Notion API](https://js.langchain.com/docs/integrations/document_loaders/web_loaders/notionapi)
- [Create ChatBot for your Notion Documents with LangChain and Streamlit](https://betterprogramming.pub/build-a-chatbot-for-your-notion-documents-using-langchain-and-openai-e0ad7b903b84) 