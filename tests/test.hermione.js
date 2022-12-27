const { assert, should } = require('chai');

describe('Страница', async () => {
	it('Загрузка', async ({ browser }) => {
		await browser.url('/');

		await (await browser.$('body')).waitForExist()

		// assert.ok('test obj', 'test')
	});
});

describe('Кнопка', async () => {
	it('Кнопка должна показывать при нажатии блок #show', async ({
		browser
	}) => {
		await browser.url('/');

		await (await browser.$('#btn')).click();
		await (await browser.$('#show')).waitForDisplayed();
	});

	beforeEach(({ browser }) => {
		browser.refresh();
		browser.$('#show').click();
	});
	it('Кнопка должна скрывать при нажатии блок #show', async ({ browser }) => {
		await browser.url('/');

		await (await browser.$('#btn')).click();
		expect(await browser.$('#show')).not.toBeDisplayed();
	});
});
