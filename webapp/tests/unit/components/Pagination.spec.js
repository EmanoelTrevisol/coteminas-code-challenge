import { shallowMount } from '@vue/test-utils';
import Pagination from '@/components/Pagination';

describe('Pagination.vue', () => {
  describe('render component', () => {
    it('renders Pagination component', () => {
      const wrapper = shallowMount(Pagination);

      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('computes correct options based on props', () => {
    const build = (data) => {
      const wrapper = shallowMount(Pagination, { propsData: data || {} });

      const options = wrapper.findAll('.option').wrappers;

      const numOptions = options.map((wrp) => wrp.text());

      return { wrapper, numOptions };
    };

    it('displays correct current page', () => {
      const currentPage = 5;
      const { wrapper } = build({
        currentPage,
        total: 103,
        perPage: 10,
      });

      const selected = wrapper.find('.option.selected');

      expect(selected.text()).toBe(currentPage.toString());
    });

    describe('page options depending on currentPage', () => {
      it('current: 1, total: 103, perPage: 10', () => {
        const currentPage = 1;
        const { numOptions } = build({
          currentPage,
          total: 103,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5', '6']);
      });

      it('current: 2, total: 103, perPage: 10', () => {
        const currentPage = 2;
        const { numOptions } = build({
          currentPage,
          total: 103,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5', '6']);
      });

      it('current: 3, total: 103, perPage: 10', () => {
        const currentPage = 3;
        const { numOptions } = build({
          currentPage,
          total: 103,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5', '6']);
      });

      it('current: 4, total: 103, perPage: 10', () => {
        const currentPage = 4;
        const { numOptions } = build({
          currentPage,
          total: 103,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5', '6', '7']);
      });

      it('current: 5, total: 103, perPage: 10', () => {
        const currentPage = 5;
        const { numOptions } = build({
          currentPage,
          total: 103,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['2', '3', '4', '5', '6', '7', '8']);
      });

      it('current: 6, total: 103, perPage: 10', () => {
        const currentPage = 6;
        const { numOptions } = build({
          currentPage,
          total: 103,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['3', '4', '5', '6', '7', '8', '9']);
      });

      it('current: 7, total: 103, perPage: 10', () => {
        const currentPage = 7;
        const { numOptions } = build({
          currentPage,
          total: 103,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['4', '5', '6', '7', '8', '9', '10']);
      });

      it('current: 8, total: 103, perPage: 10', () => {
        const currentPage = 8;
        const { numOptions } = build({
          currentPage,
          total: 103,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['5', '6', '7', '8', '9', '10', '11']);
      });

      it('current: 9, total: 103, perPage: 10', () => {
        const currentPage = 9;
        const { numOptions } = build({
          currentPage,
          total: 103,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['5', '6', '7', '8', '9', '10', '11']);
      });

      it('current: 10, total: 103, perPage: 10', () => {
        const currentPage = 10;
        const { numOptions } = build({
          currentPage,
          total: 103,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['5', '6', '7', '8', '9', '10', '11']);
      });

      it('current: 11, total: 103, perPage: 10', () => {
        const currentPage = 11;
        const { numOptions } = build({
          currentPage,
          total: 103,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['5', '6', '7', '8', '9', '10', '11']);
      });
    });

    describe('page options depending on perPage', () => {
      it('current: 1, total: 101, perPage: 10', () => {
        const currentPage = 1;
        const { numOptions } = build({
          currentPage,
          total: 101,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5', '6']);
      });

      it('current: 1, total: 101, perPage: 25', () => {
        const currentPage = 1;
        const { numOptions } = build({
          currentPage,
          total: 101,
          perPage: 25,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5']);
      });

      it('current: 1, total: 101, perPage: 50', () => {
        const currentPage = 1;
        const { numOptions } = build({
          currentPage,
          total: 101,
          perPage: 50,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3']);
      });

      it('current: 1, total: 101, perPage: 100', () => {
        const currentPage = 1;
        const { numOptions } = build({
          currentPage,
          total: 101,
          perPage: 100,
        });

        expect(numOptions).toStrictEqual(['1', '2']);
      });
    });

    describe('page options depending on perPage and currentPage', () => {
      it('current: 1, total: 101, perPage: 25', () => {
        const currentPage = 1;
        const { numOptions } = build({
          currentPage,
          total: 101,
          perPage: 25,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5']);
      });

      it('current: 2, total: 101, perPage: 25', () => {
        const currentPage = 2;
        const { numOptions } = build({
          currentPage,
          total: 101,
          perPage: 25,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5']);
      });

      it('current: 3, total: 101, perPage: 25', () => {
        const currentPage = 3;
        const { numOptions } = build({
          currentPage,
          total: 101,
          perPage: 25,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5']);
      });

      it('current: 4, total: 101, perPage: 25', () => {
        const currentPage = 4;
        const { numOptions } = build({
          currentPage,
          total: 101,
          perPage: 25,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5']);
      });

      it('current: 5, total: 101, perPage: 25', () => {
        const currentPage = 5;
        const { numOptions } = build({
          currentPage,
          total: 101,
          perPage: 25,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5']);
      });

      it('current: 1, total: 101, perPage: 50', () => {
        const currentPage = 1;
        const { numOptions } = build({
          currentPage,
          total: 101,
          perPage: 50,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3']);
      });

      it('current: 2, total: 101, perPage: 50', () => {
        const currentPage = 2;
        const { numOptions } = build({
          currentPage,
          total: 101,
          perPage: 50,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3']);
      });

      it('current: 3, total: 101, perPage: 50', () => {
        const currentPage = 3;
        const { numOptions } = build({
          currentPage,
          total: 101,
          perPage: 50,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3']);
      });

      it('current: 1, total: 35, perPage: 10', () => {
        const currentPage = 1;
        const { numOptions } = build({
          currentPage,
          total: 35,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4']);
      });

      it('current: 2, total: 35, perPage: 10', () => {
        const currentPage = 2;
        const { numOptions } = build({
          currentPage,
          total: 35,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4']);
      });

      it('current: 3, total: 35, perPage: 10', () => {
        const currentPage = 3;
        const { numOptions } = build({
          currentPage,
          total: 35,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4']);
      });

      it('current: 4, total: 35, perPage: 10', () => {
        const currentPage = 4;
        const { numOptions } = build({
          currentPage,
          total: 35,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4']);
      });

      it('current: 1, total: 45, perPage: 10', () => {
        const currentPage = 1;
        const { numOptions } = build({
          currentPage,
          total: 45,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5']);
      });

      it('current: 3, total: 45, perPage: 10', () => {
        const currentPage = 2;
        const { numOptions } = build({
          currentPage,
          total: 45,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5']);
      });

      it('current: 3, total: 45, perPage: 10', () => {
        const currentPage = 3;
        const { numOptions } = build({
          currentPage,
          total: 45,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5']);
      });

      it('current: 4, total: 45, perPage: 10', () => {
        const currentPage = 4;
        const { numOptions } = build({
          currentPage,
          total: 45,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5']);
      });

      it('current: 5, total: 45, perPage: 10', () => {
        const currentPage = 5;
        const { numOptions } = build({
          currentPage,
          total: 45,
          perPage: 10,
        });

        expect(numOptions).toStrictEqual(['1', '2', '3', '4', '5']);
      });
    });

    describe('show perPage options correctly', () => {
      it('should display perPage select options', () => {
        const options = [
          { value: '10', text: '10 produtos por página' },
          { value: '25', text: '25 produtos por página' },
          { value: '50', text: '50 produtos por página' },
          { value: '100', text: '100 produtos por página' },
        ];

        const { wrapper } = build({
          currentPage: 1,
          total: 45,
          perPage: 10,
        });

        const select = wrapper.find('select');

        const [opt0, opt1, opt2, opt3] = select.element.options;

        expect(opt0.text).toBe(options[0].text);
        expect(opt0.value).toBe(options[0].value);

        expect(opt1.text).toBe(options[1].text);
        expect(opt1.value).toBe(options[1].value);

        expect(opt2.text).toBe(options[2].text);
        expect(opt2.value).toBe(options[2].value);

        expect(opt3.text).toBe(options[3].text);
        expect(opt3.value).toBe(options[3].value);
      });

      it('should have 25 perPage selected option', () => {
        const { wrapper } = build({
          currentPage: 1,
          total: 45,
          perPage: 25,
        });

        const select = wrapper.find('select');

        expect(select.find('option:checked').element.value).toBe('25');
        expect(select.find('option:checked').element.text).toBe(
          '25 produtos por página'
        );
      });
    });

    describe('emits events to the parent component', () => {
      it('should select 50 perPage option and emit event', async () => {
        const { wrapper } = build({
          currentPage: 1,
          total: 45,
          perPage: 10,
        });

        const select = wrapper.find('select');

        await select
          .findAll('option')
          .at(2)
          .setSelected();
        await wrapper.setProps({
          perPage: 50,
        });

        expect(select.find('option:checked').element.value).toBe('50');
        expect(select.find('option:checked').element.text).toBe(
          '50 produtos por página'
        );

        expect(wrapper.emitted('update:perPage').length).toBe(1);
        expect(wrapper.emitted('update:perPage')[0]).toStrictEqual([50]);
      });

      it('should emit update:currentPage on item click', async () => {
        const { wrapper } = build({
          currentPage: 1,
          total: 45,
          perPage: 10,
        });

        const newPage = wrapper.findAll('.option').at(1);
        expect(newPage.text()).toBe('2');

        await newPage.trigger('click');
        await wrapper.setProps({ currentPage: 2 });

        const currentPageEmitted = wrapper.emitted('update:currentPage');

        expect(wrapper.find('.option.selected').text()).toBe('2');
        expect(currentPageEmitted.length).toBe(1);
        expect(currentPageEmitted[0]).toStrictEqual([2]);
      });

      it('should emit update:currentPage on first page click', async () => {
        const { wrapper } = build({
          currentPage: 3,
          total: 45,
          perPage: 10,
        });

        const firstPage = wrapper.find('.first-page');

        await firstPage.trigger('click');
        await wrapper.setProps({
          currentPage: 1,
        });

        const currentPageEmitted = wrapper.emitted('update:currentPage');

        expect(wrapper.find('.option.selected').text()).toBe('1');
        expect(firstPage.classes('disabled')).toBe(true);
        expect(currentPageEmitted.length).toBe(1);
        expect(currentPageEmitted[0]).toStrictEqual([1]);
      });

      it('should emit update:currentPage on last page click', async () => {
        const { wrapper } = build({
          currentPage: 3,
          total: 45,
          perPage: 10,
        });

        const lastPage = wrapper.find('.last-page');

        await lastPage.trigger('click');
        await wrapper.setProps({
          currentPage: 5,
        });

        const currentPageEmitted = wrapper.emitted('update:currentPage');

        expect(wrapper.find('.option.selected').text()).toBe('5');
        expect(lastPage.classes('disabled')).toBe(true);
        expect(currentPageEmitted.length).toBe(1);
        expect(currentPageEmitted[0]).toStrictEqual([5]);
      });

      it('should emit update:currentPage on previous page click', async () => {
        const { wrapper } = build({
          currentPage: 3,
          total: 45,
          perPage: 10,
        });

        const previous = wrapper.find('.previous-page');

        await previous.trigger('click');
        await wrapper.setProps({
          currentPage: 2,
        });

        const currentPageEmitted = wrapper.emitted('update:currentPage');

        expect(wrapper.find('.option.selected').text()).toBe('2');
        expect(previous.classes('disabled')).toBe(false);
        expect(currentPageEmitted.length).toBe(1);
        expect(currentPageEmitted[0]).toStrictEqual([2]);
      });

      it('should emit update:currentPage on next page click', async () => {
        const { wrapper } = build({
          currentPage: 3,
          total: 45,
          perPage: 10,
        });

        const next = wrapper.find('.next-page');

        await next.trigger('click');
        await wrapper.setProps({
          currentPage: 4,
        });

        const currentPageEmitted = wrapper.emitted('update:currentPage');

        expect(wrapper.find('.option.selected').text()).toBe('4');
        expect(next.classes('disabled')).toBe(false);
        expect(currentPageEmitted.length).toBe(1);
        expect(currentPageEmitted[0]).toStrictEqual([4]);
      });
    });
  });
});
