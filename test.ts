/**
 * test.ts
 * Generic I2C Extension v2.0
 * Simple test program
 */

GenericI2C.initialize()

let first = GenericI2C.firstDevice()

if (first >= 0) {
    serial.writeLine("First I2C device: 0x" + first.toString(16))
    let value = GenericI2C.readByte(first)
    serial.writeLine("First byte: " + value)
} else {
    serial.writeLine("No I2C devices found")
}
