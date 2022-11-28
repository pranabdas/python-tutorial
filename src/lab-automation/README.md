# Python instrumentation

### Windows OS
We are trying to connect Cryocon 22c temperature controller via USB/
Serial cable. Connect the device via a USB cable. Go to Windows device manager
and install necessary drivers to detect it.

In our case we needed to install FTDI driver. After installation, a reboot was
required, and our device is recognized in the Device Manager > Ports (COM & LPT
) > USB Serial Port (COM4)

We have installed Python3 and required python packages as listed in
`requirements.txt`.
```
pip install --upgrade -r requirements.txt
```

### Usage

Start a resource manager using `pyvisa-py` backend:

```
import pyvisa
rm = pyvisa.ResourceManager('@py')
```

List available resources:
```
rm.list_resources()
```

Connect to one of the resources:
```
inst = rm.open_resource("ASRL4::INSTR")
```

Example queries (SCPI queries for a Cryocon temperature controller):
```
inst.query("*IDN?")
inst.query("INPut A:UNITs K;TEMPer?")
inst.query("LOOP 1:SETPt?")
```

Disconnect instrument:
```
inst.close()
```

Delete resource manager:
```
del rm
```

### Resources
- https://github.com/pyvisa/pyvisa
- https://github.com/lightwave-lab/lightlab
- https://github.com/bicarlsen/easy-scpi/
- https://github.com/bicarlsen/cryocon-22c-controller
