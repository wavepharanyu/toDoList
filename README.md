# Fix Watchman

# View Current Limit
cat /proc/sys/fs/inotify/max_user_watches

# Temporary Set Limit
sudo sysctl fs.inotify.max_user_watches=524288
sudo sysctl -p
