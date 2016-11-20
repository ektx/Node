require('shelljs/global');

if (!which('git')) {
	echo('Sorry! this script requires git!');
	exit(1);
}

let gitProcess = exec('git clone /Users/ZWL/repositories/c.git');

if (gitProcess.code !== 0) {
	echo('Error! Git clone failed', gitProcess.stderr);
	exit(1)
} else {
	echo('Git clone done.')
}