openMyfile();
try {
	writeMyFile(theData); // This may throw an error
} catch (e) {
	handleError(e); // If an error occurred, handle it
} finally {
	closeMyFile(); // Always close the resource
}
