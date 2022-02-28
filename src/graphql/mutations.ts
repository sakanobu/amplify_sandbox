/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      review_id
      owner
      book_title
      author_name
      review
      company_expense_flag
      name
      category
      image
      created_at
      updated_at
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      review_id
      owner
      book_title
      author_name
      review
      company_expense_flag
      name
      category
      image
      created_at
      updated_at
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      review_id
      owner
      book_title
      author_name
      review
      company_expense_flag
      name
      category
      image
      created_at
      updated_at
      id
      createdAt
      updatedAt
    }
  }
`;
