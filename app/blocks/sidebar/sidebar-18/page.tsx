import { CodeHighlighter } from "@/components/code/code-highlighter"

export default async function Page() {
  return (
    <div className="min-h-screen bg-black">
      <div className="p-4">
        <CodeHighlighter
          lang="php"
          max96={false}
          className="-mt-8 **:[pre]:p-4"
          removeLastLine
          plain
          code={processedSourceCode}
        />
      </div>
    </div>
  )
}

const processedSourceCode = `
<?php

namespace App\\Http\\Controllers;

abstract class Controller
{
    //
}
`
