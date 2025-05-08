import { Checkbox, Form, Radio, Slider, Space } from "antd";
import { useDispatch } from "react-redux";
import { onSetFilters } from "../../store/ui/uiSlice";

const categories = ["Perfume", "Trousers", "Shoe", "Handbag", "Hat", "Thermos"];
const colors = ["blue", "yellow", "green", "blue-dark"];
const sizes = ["S", "M", "L", "XL", "XXL"];


export const ProductFilter = () => {
  const dispatch = useDispatch()


  const handleFilter = (values: any) => {

    const filtersMap = values.categories.map((category: string) => ({
      name: 'Category', value: category
    }))
    dispatch(onSetFilters(filtersMap))
  }


  return (
    <div className="product-filter">
      <Form onValuesChange={(values) => handleFilter(values)}>
        <div className="filter-section">
          <h3>Categories</h3>
          <Form.Item name="categories">
            <Checkbox.Group>
              <Space direction="vertical">
                {categories.map((category) => (
                  <Checkbox key={category} value={category}>
                    {category}
                  </Checkbox>
                ))}
              </Space>
            </Checkbox.Group>
          </Form.Item>
        </div>

        
        <div className="filter-section">
          <h3>Color</h3>
          <Form.Item name="color">
          <div className="color-options">
            <Radio.Group defaultValue="blue">
              {colors.map((color) => (
                <Radio.Button
                  key={color}
                  value={color}
                  className={`color-circle ${color}`}
                />
              ))}
            </Radio.Group>
          </div>
          </Form.Item>
        </div>

        <div className="filter-section">
          <h3>Size</h3>
          <Form.Item name="size">
          <Radio.Group defaultValue="S" buttonStyle="solid">
            <Space className="size-options">
              {sizes.map((size) => (
                <Radio.Button key={size} value={size} className="size-button">
                  {size}
                </Radio.Button>
              ))}
            </Space>
          </Radio.Group>
          </Form.Item>
        </div>

        <div className="filter-section">
          <h3>Price</h3>
          <Form.Item name="price">
          <div className="price-slider">
            <Slider
              range
              min={0}
              max={1000}
              defaultValue={[100, 500]}
              tooltip={{
                formatter: (value) => `$${value}`,
                placement: "bottom",
              }}
            />
          </div>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};