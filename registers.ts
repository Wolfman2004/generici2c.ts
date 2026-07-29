/**
 * registers.ts
 * Generic I2C Extension v2.0
 */

namespace GenericI2CRegisters {

    export function writeRegister(address: number, register: number, value: number): void {
        GenericI2CCore.writeRegister(address, register, value)
    }

    export function readRegister(address: number, register: number): number {
        return GenericI2CCore.readRegister(address, register)
    }

    export function writeRegisterBuffer(address: number, register: number, buffer: Buffer): void {
        GenericI2CCore.writeRegisterBuffer(address, register, buffer)
    }

    export function readRegisterBuffer(address: number, register: number, length: number): Buffer {
        return GenericI2CCore.readRegisterBuffer(address, register, length)
    }

    export function readUInt16(address: number, register: number): number {
        let b = readRegisterBuffer(address, register, 2)
        return (b[0] << 8) | b[1]
    }

    export function writeUInt16(address: number, register: number, value: number): void {
        let b = pins.createBuffer(2)
        b[0] = (value >> 8) & 0xff
        b[1] = value & 0xff
        writeRegisterBuffer(address, register, b)
    }
}
