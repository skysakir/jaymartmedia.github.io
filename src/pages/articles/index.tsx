/**
 * This file handles mapping routes that existed in
 * legacy learn.jaymartmedia.com so that any saved links
 * still go to the right video.
 * 
 * Legacy pages with only video have been stored in
 * /src/pages/articles/legacy/*
 * 
 * Legacy pages with text content have been stored in
 * /blog/*
 */
import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";

const indexMapping = new Map<string, string>();
indexMapping.set("1", "/blog/input-validation-with-java/");
indexMapping.set("2", "/articles/legacy/discord-rewrite/");
indexMapping.set("3", "/articles/legacy/wamp-server/");
indexMapping.set("4", "/articles/legacy/python-web-scraper/");
indexMapping.set("5", "/articles/legacy/discord-bot-1/");
indexMapping.set("6", "/articles/legacy/discord-bot-2/");
indexMapping.set("7", "/articles/legacy/discord-bot-3/");
indexMapping.set("8", "/articles/legacy/google-cloud-hosting/");
indexMapping.set("9", "/articles/legacy/php-web-page/");
indexMapping.set("10", "/blog/web-scraping-with-php/");
indexMapping.set("11", "/blog/multistream-ffmpeg");

export default function Page () {
    return (
        <Layout>
            <BrowserOnly>
                {() => <Articles />}
            </BrowserOnly>
        </Layout>
    )
}

function Articles (): JSX.Element {
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    let redirected = false;
    if(id) {
        const redirectUrl = indexMapping.get(id);
        if(redirectUrl){
            location.href = redirectUrl;
            redirected = true;
        }
    }
    
    return (
        <ul>
            {Array.from(indexMapping.values()).map(value => <Article path={value} />)}
        </ul>
    )
}

function Article({path}: {path: string}) {
    let title = "";
    const pathParts = path.split('/');
    for(let i = pathParts.length - 1; i >= 0; i -= 1){
        const part = pathParts[i];
        if(part.length > 0) {
            title = part;
            break;
        }
    }
    return (
        <li><a href={path}>{title}</a></li>
    )
}