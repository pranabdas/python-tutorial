# import pyvisa


class Device():
    def __init__(self, name):
        """Initialize a device attributes"""
        self.name = name
        self.port = None
        self.timeout = 1000
        self.baud = 9600
        self.read_termination='\r\n',
        self.write_termination='\r\n',
        self.backend='@py',
        self.handshake=False,

    def set_port(self, port):
        """Set the communication port"""
        self.port = port

    def set_timeout(self, timeout):
        """Set the connection timeout"""
        if (timeout > 60 * 60 * 1000):
            raise ValueError("Too large timeout value (> 1 hr).")
        else:
            self.timeout = timeout

    def set_baud(self, baud):
        """Set the bit rate"""
        self.baud = baud

    def status(self):
        """Simulates the instrument front panel with various information"""
