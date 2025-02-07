# Unhandled Error in Express.js Route Parameter

This repository demonstrates a common error in Express.js route handlers: the lack of error handling for invalid route parameters. The `bug.js` file showcases the issue, while `bugSolution.js` provides a corrected version.

**Problem:** The `/users/:id` route in `bug.js` directly uses the `req.params.id` without any validation or error handling. If an invalid ID is provided, the application might crash or behave unpredictably.

**Solution:** The `bugSolution.js` file demonstrates how to address this issue using try-catch blocks and providing appropriate responses for invalid or missing IDs.