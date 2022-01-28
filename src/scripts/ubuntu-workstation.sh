sudo apt-get update

sudo apt-get install -y git gnome-tweaks yes avahi-daemon avahi-discover avahi-utils libnss-mdns mdns-scan
cd ~
git clone https://github.com/Jannomag/Yaru-Colors.git
cd Yaru-Colors
yes 1 | ./install.sh
cd ..
sudo rm -r Yaru-Colors

sudo apt-get install -y zsh curl wget
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
yes ALL | bash -c  "$(wget -qO- https://git.io/vQgMr)" 
chsh -s $(which zsh)
curl https://raw.githubusercontent.com/xxninjabunnyxx/hug-zsh/main/hug.zsh-theme -o ~/.oh-my-zsh/themes/hug.zsh-theme