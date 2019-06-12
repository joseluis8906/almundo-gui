docker run -it\
	--name almundo-gui\
	-p 4200:4200\
	-v $HOME/Developments/almundo-gui:/app\
	-d node:10.15.3-stretch
