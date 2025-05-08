import React from "react";
import { Row, Col, Tag, Typography, Select, Space } from "antd";

const { Text } = Typography;
const { Option } = Select;

type Filter = {
  name: string;
  value: string;
};

type SortOption =
  | "Relevance"
  | "Price: Low to High"
  | "Price: High to Low"
  | "Newest";

type FilterHeaderProps = {
  filters: Filter[];
  onRemoveFilter?: (filter: Filter) => void;
  sortBy?: string;
  onSortChange?: (value: SortOption) => void;
  totalResults: number;
  currentPage: number;
  pageSize: number;
};

export const FilterHeader: React.FC<FilterHeaderProps> = ({
  filters,
  onRemoveFilter,
  sortBy = "Relevance",
  onSortChange,
  totalResults,
  currentPage,
  pageSize,
}) => {
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalResults);

  const getFilterValue = (filter: Filter) =>
    typeof filter === "string" ? filter : filter.value;

  return (
    <div className="filter-header">
      <Row
        className="filter-header-row"
        wrap={true}
        align="middle"
        justify="space-between"
      >
        <Col span={22}>
          <div className="filters-block">
            <Text strong className="applied-filters-label">
              Applied Filters:
            </Text>
            <Space size={[8, 8]} wrap className="filters-list">
              {filters.map((filter, index) => (
                <Tag
                  key={index}
                  closable={!!onRemoveFilter}
                  onClose={() => onRemoveFilter?.(filter)}
                  className="filter-tag"
                >
                  {getFilterValue(filter)}
                </Tag>
              ))}
            </Space>
          </div>
        </Col>
        <Col span={2}>
            <Text className="sort-label">SORT BY</Text>
            <Select
              value={sortBy}
              onChange={(value) => onSortChange?.(value as SortOption)}
              size="small"
              className="sort-select"
            >
              <Option value="Relevance">Relevance</Option>
              <Option value="Price: Low to High">Price: Low to High</Option>
              <Option value="Price: High to Low">Price: High to Low</Option>
              <Option value="Newest">Newest</Option>
            </Select>
        </Col>
      </Row>
      <Row style={{ marginTop: 8 }}>
        <Col>
          <Text className="results-text">
            Showing {start}–{end} of {totalResults} results.
          </Text>
        </Col>
      </Row>
    </div>
  );
};
