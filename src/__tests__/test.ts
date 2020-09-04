import { ConfigManage,ConfigService } from '../index'
import * as Path from 'path'

describe("Config test",() => {
    const configPath = Path.join(__dirname,`./${process.env.NODE_ENV}.env`)
    let config:ConfigService | null = null

    beforeEach(async () => {
        config = ConfigManage.craete(configPath)
    });

    it("create service",() => {
        expect(config).not.toBeNull()
    })

    it("get config",() => {
        expect(config?.get("MYCONFIG")).toEqual("123")
    })
})