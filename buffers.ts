/**
 * buffers.ts
 * Generic I2C Extension v2.0
 */

namespace GenericI2CBuffers {

    export function create(length: number): Buffer {
        return pins.createBuffer(length)
    }

    export function length(buffer: Buffer): number {
        return buffer.length
    }

    export function setByte(buffer: Buffer, index: number, value: number): void {
        if (index >= 0 && index < buffer.length)
            buffer[index] = value & 0xff
    }

    export function getByte(buffer: Buffer, index: number): number {
        if (index >= 0 && index < buffer.length)
            return buffer[index]
        return 0
    }

    export function fill(buffer: Buffer, value: number): void {
        for (let i = 0; i < buffer.length; i++) buffer[i] = value & 0xff
    }
}
