const { NotionAPILoader } = require("langchain/document_loaders/web/notionapi");
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");
const { config } = require("dotenv");

config({ path: '../.env' });

const default_text_splitter = new RecursiveCharacterTextSplitter(
    chunk_size = 8192, chunk_overlap = 0, separators = [" ", ",", "\n"]
)

const notionToDocs = async (type = 'database', id = undefined) => {
    const loader = getNotionLoader(id, type);
    return await loader.loadAndSplit(default_text_splitter);
}

const getNotionLoader = (id, type) => {
    const defaultId = type === "database" ? process.env.DATABASE_ID : process.env.PAGE_ID;

    return new NotionAPILoader({
        id: id ?? defaultId,
        type: type, // "page" or "database"
        clientOptions: {
            auth: process.env.NOTION_INTEGRATION_KEY,
        },
        onDocumentLoaded: (current, total, currentTitle) => {
            console.log(`Loaded Page: ${currentTitle} (${current}/${total})`);
        },
        callerOptions: {
            maxConcurrency: process.env.NOTION_MAX_CONCURRENCY || 3,
        },
        propertiesAsHeader: true,
    });
}

module.exports = { notionToDocs, getNotionLoader }
