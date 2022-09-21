import { MessageService } from "./message.service"

describe('MessageService', () => {
    let servive: MessageService;

    beforeEach(() => {
        // servive = new MessageService();
    })

    it('should have no messages when start', () => {
        //arrange
        servive = new MessageService();
        //act

        //assert
        expect(servive.messages.length).toBe(0);
    })

    it('should add a msg to messages when called', () => {
        //arrange
        servive = new MessageService();
        //act
        servive.add('messageTest');
        //assert
        expect(servive.messages.length).toBe(1);
    })

    it('should cleat msgs when called', () => {
         //arrange
         servive = new MessageService();
         servive.add('messageTest');
         //act
         servive.clear();
         //assert
        expect(servive.messages.length).toBe(0);
    })
})