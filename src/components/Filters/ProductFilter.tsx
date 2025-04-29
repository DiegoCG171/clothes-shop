import { Button, Checkbox, Form, Radio, Slider, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { onClearAllFilters, onSetFilters, ProductFilters } from "../../store/ui/uiSlice";
import { useEffect } from "react";
import { RootState } from "../../store/store";


const defaultFilters: ProductFilters = {
  categories: [],
  color: '',
  size: '',
  price: [0, 100],
};

export const ProductFilter = () => {
  const dispatch = useDispatch();
  const {productFilters} = useSelector((state: RootState) => state.ui)
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(productFilters);
  }, [productFilters, form]);

  const handleFilter = (values: ProductFilters) => {
    const filters = {
      categories: values.categories || [],
      color: values.color || '',
      size: values.size || '',
      price: values.price || [0, 100],
    };
    dispatch(onSetFilters(filters));
  };

  const handleReset = () => {
    form.resetFields();
    dispatch(onClearAllFilters());
  };

  return (
    <div className="product-filter">
      <Form form={form} initialValues={defaultFilters} onValuesChange={(_, allValues) => handleFilter(allValues)}>
        <div className="filter-section">
          <h3>Categories</h3>
          <Form.Item name="categories">
            <Checkbox.Group>
              <Space direction="vertical">
                <Checkbox value="Perfume">Perfume</Checkbox>
                <Checkbox value="Trousers">Trousers</Checkbox>
                <Checkbox value="Shoe">Shoe</Checkbox>
                <Checkbox value="Handbag">Handbag</Checkbox>
                <Checkbox value="Hat">Hat</Checkbox>
                <Checkbox value="Thermos">Thermos</Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>
        </div>

        <div className="filter-section">
          <h3>Color</h3>
          <div className="color-options">
            <Form.Item name="color">
              <Radio.Group>
                <Radio.Button value="blue" className="color-circle blue" />
                <Radio.Button value="yellow" className="color-circle yellow" />
                <Radio.Button value="green" className="color-circle green" />
                <Radio.Button
                  value="blue-dark"
                  className="color-circle blue-dark"
                />
              </Radio.Group>
            </Form.Item>
          </div>
        </div>

        <div className="filter-section">
          <h3>Size</h3>
          <Form.Item name="size">
            <Radio.Group buttonStyle="solid">
              <Space className="size-options">
                <Radio.Button value="S" className="size-button">
                  S
                </Radio.Button>
                <Radio.Button value="M" className="size-button">
                  M
                </Radio.Button>
                <Radio.Button value="L" className="size-button">
                  L
                </Radio.Button>
                <Radio.Button value="XL" className="size-button">
                  XL
                </Radio.Button>
                <Radio.Button value="XXL" className="size-button">
                  XXL
                </Radio.Button>
              </Space>
            </Radio.Group>
          </Form.Item>
        </div>

        <div className="filter-section">
          <h3>Price</h3>
          <div className="price-slider">
            <Form.Item name="price">
              <Slider
                range
                min={0}
                max={100}
                defaultValue={[0, 100]}
                tooltip={{
                  formatter: (value) => `$${value}`,
                  placement: "bottom",
                }}
              />
            </Form.Item>
          </div>
        </div>
        <div className="filter-actions">
          <Button onClick={handleReset} type="default" block>
            Reset filters
          </Button>
        </div>
      </Form>
    </div>
  );
};
