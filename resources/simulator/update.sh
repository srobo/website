# This file not executable so it can't be possibly run accidentally or
# over the web.

PLATFORMS="linux macosx windows"

# Use a temporary location so we can be sure we're not overwriting more
# that would be expected
orig_dir=$PWD
tmpdir=`mktemp -d --suffix -sim-update`

# For each plaform we extract the zip, pull the latest from the SR hosted
# repo and then re-zip it.
for platform in $PLATFORMS
do
    cd $tmpdir
    zipname="$orig_dir/simulator-$platform.zip"
    unzip -q $zipname -d $platform
    rm $zipname
    cd $platform/robot-sim
    git pull -q git://srobo.org/simulator.git
    revision=`git log -1 --oneline`
    cd ..
    zip -q -r $zipname .
done

# Tidy up
cd $orig_dir
rm -rf $tmpdir

echo Simulators updated to $revision
