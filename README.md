<p align="center">
    <img src="https://cdn.discordapp.com/attachments/1318492981736771584/1319694736851734538/quality_restoration_20241220215519183.png?ex=6766e500&is=67659380&hm=dae09804d504d9bb45e58a928214e0f2ce63b1794921a226e12df699a3ba4a94&](https://cdn.discordapp.com/attachments/1320063512034148452/1320248085787578378/Screenshot_20241222-103416.png?ex=6768e858&is=676796d8&hm=8147721c9411083340ac48b44095754a3e61e12755b8c1589431d415e4363cfc&)" alt="LightPanel Logo">
</p>
<h2> LightPanel is an open source panel for managing your game servers, applications and more built with modern technologies such as Node.js, Docker and Express - made to work with our LightDaemon software.</h2>

## Installation
### Picking a Server OS

LightPanel runs on a wide range of operating systems, so pick whichever you are most comfortable using.

| Operating System | Version |     Supported      | Notes                                                       |
|------------------|---------|:------------------:|-------------------------------------------------------------|
| **Ubuntu**       | 24.04   | ✅ | Documentation written assuming Ubuntu 24.04 as the OS. |
|                  | 22.04   | ✅ |                                                             |
| **CentOS**       | 7       | ✅ | Extra repos are required.                                   |
|                  | 8       | ✅ | Note that CentOS 8 is EOL. Use Rocky or Alma Linux.         |
| **Debian**       | 11      | ✅ |                                                             |
|                  | 12      | ✅ |                                                             |
| **Windows**      | 11      | ⚠️ | May have issues due to Windows' firewall.                   |
|                  | 10      | ⚠️ |                                                             |
| **macOS**        | 10.15+  | ⚠️ |                                                             |

## Dependencies

* Node.js `v20` and higher (Nodejs `v20` recommended).

### Example Dependency Installation

The commands below are simply an example of how you might install these dependencies on Ubuntu 24.04. Please consult with your
operating system's package manager to determine the correct packages to install.

```sh
# Ubuntu/Debian
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_16.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list

sudo apt update
sudo apt install -y nodejs git
```

## Node.js Latest Installation

1. Install nvm & configure:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```
```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
2. Install Node.js Latest Version:
```bash
nvm install node
```

## Installation

The following commands will download the Light Panel into /etc/panel and use npm to install the required packages:

``` bash
cd /etc
git clone https://github.com/LightCloudLabs/panel.git
cd panel
npm install
```

### Seed & Create a User

You'll then need to create an administrative user so that you can log into the panel. To do so, run the command below.

``` bash
npm run seed
npm run createUser
```

### Setup Complete

All you need to do now is start LightPanel:
``` bash
node .
```

### Running with pm2 (Optional)

1. Install pm2:
```bash
npm install pm2 -g
```
2. Start the application using pm2:
```bash
pm2 start index.js --name "light"
```
3. Set up pm2 to auto-start on server reboot:
```
pm2 save
pm2 startup
```

Your Panel will now be accessible from port 3001 (unless you changed it in `config.json`).

### LightDaemon:
* [**DAEMON**](https://github.com/LightCloudLabs/daemon)

# Credits
- **Skyport** (EOL)
- [**SRYDEN**](https://sryden.com)
- [**HydraLabs**](https://github.com/HydraLabs-beta)
- [**LightCloud Team**](https://discord.gg/bTKrswWCgH)
