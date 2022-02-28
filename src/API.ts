/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateReviewInput = {
  review_id: string,
  owner: string,
  book_title: string,
  author_name?: string | null,
  review: string,
  company_expense_flag?: boolean | null,
  name: string,
  category?: string | null,
  image?: string | null,
  created_at: number,
  updated_at: number,
  id?: string | null,
};

export type ModelReviewConditionInput = {
  review_id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  book_title?: ModelStringInput | null,
  author_name?: ModelStringInput | null,
  review?: ModelStringInput | null,
  company_expense_flag?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  image?: ModelStringInput | null,
  created_at?: ModelIntInput | null,
  updated_at?: ModelIntInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Review = {
  __typename: "Review",
  review_id: string,
  owner: string,
  book_title: string,
  author_name?: string | null,
  review: string,
  company_expense_flag?: boolean | null,
  name: string,
  category?: string | null,
  image?: string | null,
  created_at: number,
  updated_at: number,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReviewInput = {
  review_id?: string | null,
  owner?: string | null,
  book_title?: string | null,
  author_name?: string | null,
  review?: string | null,
  company_expense_flag?: boolean | null,
  name?: string | null,
  category?: string | null,
  image?: string | null,
  created_at?: number | null,
  updated_at?: number | null,
  id: string,
};

export type DeleteReviewInput = {
  id: string,
};

export type ModelReviewFilterInput = {
  review_id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  book_title?: ModelStringInput | null,
  author_name?: ModelStringInput | null,
  review?: ModelStringInput | null,
  company_expense_flag?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  image?: ModelStringInput | null,
  created_at?: ModelIntInput | null,
  updated_at?: ModelIntInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "Review",
    review_id: string,
    owner: string,
    book_title: string,
    author_name?: string | null,
    review: string,
    company_expense_flag?: boolean | null,
    name: string,
    category?: string | null,
    image?: string | null,
    created_at: number,
    updated_at: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "Review",
    review_id: string,
    owner: string,
    book_title: string,
    author_name?: string | null,
    review: string,
    company_expense_flag?: boolean | null,
    name: string,
    category?: string | null,
    image?: string | null,
    created_at: number,
    updated_at: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "Review",
    review_id: string,
    owner: string,
    book_title: string,
    author_name?: string | null,
    review: string,
    company_expense_flag?: boolean | null,
    name: string,
    category?: string | null,
    image?: string | null,
    created_at: number,
    updated_at: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    review_id: string,
    owner: string,
    book_title: string,
    author_name?: string | null,
    review: string,
    company_expense_flag?: boolean | null,
    name: string,
    category?: string | null,
    image?: string | null,
    created_at: number,
    updated_at: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      review_id: string,
      owner: string,
      book_title: string,
      author_name?: string | null,
      review: string,
      company_expense_flag?: boolean | null,
      name: string,
      category?: string | null,
      image?: string | null,
      created_at: number,
      updated_at: number,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview?:  {
    __typename: "Review",
    review_id: string,
    owner: string,
    book_title: string,
    author_name?: string | null,
    review: string,
    company_expense_flag?: boolean | null,
    name: string,
    category?: string | null,
    image?: string | null,
    created_at: number,
    updated_at: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    review_id: string,
    owner: string,
    book_title: string,
    author_name?: string | null,
    review: string,
    company_expense_flag?: boolean | null,
    name: string,
    category?: string | null,
    image?: string | null,
    created_at: number,
    updated_at: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    review_id: string,
    owner: string,
    book_title: string,
    author_name?: string | null,
    review: string,
    company_expense_flag?: boolean | null,
    name: string,
    category?: string | null,
    image?: string | null,
    created_at: number,
    updated_at: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
