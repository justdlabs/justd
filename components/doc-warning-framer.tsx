import { Link, Note } from "ui"

export function DocWarningFramer() {
  return (
    <Note intent="warning" className="not-prose">
      <div className="-mt-0.5 mb-2">
        <strong className="text-base">
          Warning <u>React 19</u>
        </strong>
      </div>
      If you use this component on <strong>React 19</strong>, you need to use `12.0.0-alpha.1`. Track React 19 progress
      here:{" "}
      <Link className="font-medium" target="_blank" href="https://github.com/framer/motion/pull/2667">
        FM React 19 #2667
      </Link>
      .
      <div className="mt-6">
        <pre className="border inline-block border-warning/50 dark:border-warning/15 bg-bg/30 rounded-lg py-2 px-2.5">
          <code>npm i motion@12.0.0-alpha.2</code>
        </pre>
      </div>
    </Note>
  )
}
