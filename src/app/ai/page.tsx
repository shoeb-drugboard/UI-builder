import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
    // defaults to process.env["ANTHROPIC_API_KEY"]
    apiKey: "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",
});

const msg = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 8192,
    temperature: 0,
    system: "write this notes in notepad",
    messages: [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "write notes of typescript form basic to advance"
                }
            ]
        }
    ]
});
console.log(msg);

import React from 'react'

const Page = () => {
    const [data, setData] = React.useState(msg);
    return (
        <div className="w-screen h-screen text-3xl">
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default Page