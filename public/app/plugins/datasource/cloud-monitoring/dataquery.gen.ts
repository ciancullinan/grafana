// Code generated - EDITING IS FUTILE. DO NOT EDIT.
//
// Generated by:
//     public/app/plugins/gen.go
// Using jennies:
//     TSTypesJenny
//     PluginTSTypesJenny
//
// Run 'make gen-cue' from repository root to regenerate.

import * as common from '@grafana/schema';

export interface CloudMonitoringQuery extends common.DataQuery {
  /**
   * Aliases can be set to modify the legend labels. e.g. {{metric.label.xxx}}. See docs for more detail.
   */
  aliasBy?: string;
  /**
   * Time interval in milliseconds.
   */
  intervalMs?: number;
  /**
   * SLO sub-query properties.
   */
  sloQuery?: SLOQuery;
  /**
   * GCM query type.
   * queryType: #QueryType
   * Time Series List sub-query properties.
   */
  timeSeriesList?: TimeSeriesList;
  /**
   * Time Series sub-query properties.
   */
  timeSeriesQuery?: TimeSeriesQuery;
}

/**
 * Defines the supported queryTypes.
 */
export enum QueryType {
  ANNOTATION = 'annotation',
  SLO = 'slo',
  TIME_SERIES_LIST = 'timeSeriesList',
  TIME_SERIES_QUERY = 'timeSeriesQuery',
}

/**
 * Time Series List sub-query properties.
 */
export interface TimeSeriesList {
  /**
   * Alignment period to use when regularizing data. Defaults to cloud-monitoring-auto.
   */
  alignmentPeriod?: string;
  /**
   * Reducer applied across a set of time-series values. Defaults to REDUCE_NONE.
   */
  crossSeriesReducer: string;
  /**
   * Array of filters to query data by. Labels that can be filtered on are defined by the metric.
   */
  filters?: Array<string>;
  /**
   * Array of labels to group data by.
   */
  groupBys?: Array<string>;
  /**
   * Alignment function to be used. Defaults to ALIGN_MEAN.
   */
  perSeriesAligner?: string;
  /**
   * Preprocessor is not part of the API, but is used to store the preprocessor and not affect the UI for the rest of parameters
   */
  preprocessor?: PreprocessorType;
  /**
   * GCP project to execute the query against.
   */
  projectName: string;
  /**
   * Only present if a preprocessor is selected. Alignment period to use when regularizing data. Defaults to cloud-monitoring-auto.
   */
  secondaryAlignmentPeriod?: string;
  /**
   * Only present if a preprocessor is selected. Reducer applied across a set of time-series values. Defaults to REDUCE_NONE.
   */
  secondaryCrossSeriesReducer?: string;
  /**
   * Only present if a preprocessor is selected. Array of labels to group data by.
   */
  secondaryGroupBys?: Array<string>;
  /**
   * Only present if a preprocessor is selected. Alignment function to be used. Defaults to ALIGN_MEAN.
   */
  secondaryPerSeriesAligner?: string;
  /**
   * Annotation text.
   */
  text?: string;
  /**
   * Annotation title.
   */
  title?: string;
  /**
   * Data view, defaults to FULL.
   */
  view?: string;
}

export const defaultTimeSeriesList: Partial<TimeSeriesList> = {
  filters: [],
  groupBys: [],
  secondaryGroupBys: [],
};

/**
 * Types of pre-processor available. Defined by the metric.
 */
export enum PreprocessorType {
  Delta = 'delta',
  None = 'none',
  Rate = 'rate',
}

/**
 * Time Series sub-query properties.
 */
export interface TimeSeriesQuery {
  /**
   * To disable the graphPeriod, it should explictly be set to 'disabled'.
   */
  graphPeriod?: ('disabled' | string);
  /**
   * GCP project to execute the query against.
   */
  projectName: string;
  /**
   * MQL query to be executed.
   */
  query: string;
}

/**
 * SLO sub-query properties.
 */
export interface SLOQuery {
  /**
   * Alignment period to use when regularizing data. Defaults to cloud-monitoring-auto.
   */
  alignmentPeriod?: string;
  /**
   * SLO goal value.
   */
  goal?: number;
  /**
   * Specific lookback period for the SLO.
   */
  lookbackPeriod?: string;
  /**
   * Alignment function to be used. Defaults to ALIGN_MEAN.
   */
  perSeriesAligner?: string;
  /**
   * GCP project to execute the query against.
   */
  projectName: string;
  /**
   * SLO selector.
   */
  selectorName: string;
  /**
   * ID for the service the SLO is in.
   */
  serviceId: string;
  /**
   * Name for the service the SLO is in.
   */
  serviceName: string;
  /**
   * ID for the SLO.
   */
  sloId: string;
  /**
   * Name of the SLO.
   */
  sloName: string;
}

/**
 * @deprecated This type is for migration purposes only. Replaced by TimeSeriesList Metric sub-query properties.
 */
export interface MetricQuery {
  /**
   * Aliases can be set to modify the legend labels. e.g. {{metric.label.xxx}}. See docs for more detail.
   */
  aliasBy?: string;
  /**
   * Alignment period to use when regularizing data. Defaults to cloud-monitoring-auto.
   */
  alignmentPeriod?: string;
  /**
   * Reducer applied across a set of time-series values. Defaults to REDUCE_NONE.
   */
  crossSeriesReducer: string;
  editorMode: string;
  /**
   * Array of filters to query data by. Labels that can be filtered on are defined by the metric.
   */
  filters?: Array<string>;
  /**
   * To disable the graphPeriod, it should explictly be set to 'disabled'.
   */
  graphPeriod?: ('disabled' | string);
  /**
   * Array of labels to group data by.
   */
  groupBys?: Array<string>;
  metricKind?: MetricKind;
  metricType: string;
  /**
   * Alignment function to be used. Defaults to ALIGN_MEAN.
   */
  perSeriesAligner?: string;
  /**
   * Preprocessor is not part of the API, but is used to store the preprocessor and not affect the UI for the rest of parameters
   */
  preprocessor?: PreprocessorType;
  /**
   * GCP project to execute the query against.
   */
  projectName: string;
  /**
   * MQL query to be executed.
   */
  query: string;
  valueType?: string;
  view?: string;
}

export const defaultMetricQuery: Partial<MetricQuery> = {
  filters: [],
  groupBys: [],
};

export enum MetricKind {
  CUMULATIVE = 'CUMULATIVE',
  DELTA = 'DELTA',
  GAUGE = 'GAUGE',
  METRIC_KIND_UNSPECIFIED = 'METRIC_KIND_UNSPECIFIED',
}

export enum ValueTypes {
  BOOL = 'BOOL',
  DISTRIBUTION = 'DISTRIBUTION',
  DOUBLE = 'DOUBLE',
  INT64 = 'INT64',
  MONEY = 'MONEY',
  STRING = 'STRING',
  VALUE_TYPE_UNSPECIFIED = 'VALUE_TYPE_UNSPECIFIED',
}

export enum AlignmentTypes {
  ALIGN_COUNT = 'ALIGN_COUNT',
  ALIGN_COUNT_FALSE = 'ALIGN_COUNT_FALSE',
  ALIGN_COUNT_TRUE = 'ALIGN_COUNT_TRUE',
  ALIGN_DELTA = 'ALIGN_DELTA',
  ALIGN_FRACTION_TRUE = 'ALIGN_FRACTION_TRUE',
  ALIGN_INTERPOLATE = 'ALIGN_INTERPOLATE',
  ALIGN_MAX = 'ALIGN_MAX',
  ALIGN_MEAN = 'ALIGN_MEAN',
  ALIGN_MIN = 'ALIGN_MIN',
  ALIGN_NEXT_OLDER = 'ALIGN_NEXT_OLDER',
  ALIGN_NONE = 'ALIGN_NONE',
  ALIGN_PERCENTILE_05 = 'ALIGN_PERCENTILE_05',
  ALIGN_PERCENTILE_50 = 'ALIGN_PERCENTILE_50',
  ALIGN_PERCENTILE_95 = 'ALIGN_PERCENTILE_95',
  ALIGN_PERCENTILE_99 = 'ALIGN_PERCENTILE_99',
  ALIGN_PERCENT_CHANGE = 'ALIGN_PERCENT_CHANGE',
  ALIGN_RATE = 'ALIGN_RATE',
  ALIGN_STDDEV = 'ALIGN_STDDEV',
  ALIGN_SUM = 'ALIGN_SUM',
}

/**
 * @deprecated Use TimeSeriesList instead. Legacy annotation query properties for migration purposes.
 */
export interface LegacyCloudMonitoringAnnotationQuery {
  /**
   * Array of filters to query data by. Labels that can be filtered on are defined by the metric.
   */
  filters: Array<string>;
  metricKind: MetricKind;
  metricType: string;
  /**
   * GCP project to execute the query against.
   */
  projectName: string;
  /**
   * Query refId.
   */
  refId: string;
  /**
   * Annotation text.
   */
  text: string;
  /**
   * Annotation title.
   */
  title: string;
  valueType: string;
}

export const defaultLegacyCloudMonitoringAnnotationQuery: Partial<LegacyCloudMonitoringAnnotationQuery> = {
  filters: [],
};

/**
 * Query filter representation.
 */
export interface Filter {
  /**
   * Filter condition.
   */
  condition?: string;
  /**
   * Filter key.
   */
  key: string;
  /**
   * Filter operator.
   */
  operator: string;
  /**
   * Filter value.
   */
  value: string;
}

export enum MetricFindQueryTypes {
  Aggregations = 'aggregations',
  Aligners = 'aligners',
  AlignmentPeriods = 'alignmentPeriods',
  DefaultProject = 'defaultProject',
  LabelKeys = 'labelKeys',
  LabelValues = 'labelValues',
  MetricTypes = 'metricTypes',
  Projects = 'projects',
  ResourceTypes = 'resourceTypes',
  SLO = 'slo',
  SLOServices = 'sloServices',
  Selectors = 'selectors',
  Services = 'services',
}

export interface GoogleCloudMonitoring {}
