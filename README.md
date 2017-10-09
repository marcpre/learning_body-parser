# learning_body-parser

"To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser. body-parser extract the entire body portion of an incoming request stream and exposes it on req.body "

* bodyParser.raw(): Doesn't actually parse the body, but just exposes the buffered up contents from before in a Buffer on req.body.
* bodyParser.text(): Reads the buffer as plain text and exposes the resulting string on req.body.
* bodyParser.urlencoded(): Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST) and exposes the resulting object (containing the keys and values) on req.body. For comparison; in PHP all of this is automatically done and exposed in $_POST.
* bodyParser.json(): Parses the text as JSON and exposes the resulting object on req.body.

(https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express)[https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express]