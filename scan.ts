/**
 * scan.ts
 * Generic I2C Extension v2.0
 */

namespace GenericI2CScan {

    export function ping(address: number): boolean {
        let ok = true
        try {
            pins.i2cWriteBuffer(address, pins.createBuffer(0))
        } catch (e) {
            ok = false
        }
        return ok
    }

    export function findFirst(): number {
        for (let addr = 0x08; addr <= 0x77; addr++) {
            if (ping(addr)) return addr
        }
        return -1
    }

    export function isValidAddress(address: number): boolean {
        return address >= 0x08 && address <= 0x77
    }
}
