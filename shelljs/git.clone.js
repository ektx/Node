require('shelljs/global');

if (!which('git')) {
	echo('Sorry! this script requires git!');
	exit(1);
}

if (exec('git clone /Users/ZWL/repositories/a.git').code !== 0) {
	echo('Error! Git clone failed');
	exit(1)
} else {
	echo('Git clone done.')
}