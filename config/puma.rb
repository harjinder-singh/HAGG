environment "production"

bind  "unix:///home/hagg/apps/hagg/shared/tmp/sockets/puma.sock"
pidfile "/home/hagg/apps/hagg/shared/tmp/pids/puma.pid"
state_path "/home/hagg/apps/hagg/shared/tmp/sockets/puma.state"
directory "/home/hagg/apps/hagg/current"

workers 2
threads 1,2

daemonize true

activate_control_app 'unix:///home/hagg/apps/hagg/shared/tmp/sockets/pumactl.sock'

prune_bundler