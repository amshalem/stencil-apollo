/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import 'stencil-apollo';
import '@stencil/state-tunnel';


export namespace Components {

  interface ApolloAllPosts {
    'renderer': import('stencil-apollo').QueryRenderer<
    AllPostsQuery,
    AllPostsQueryVariables
    >;
  }
  interface ApolloAllPostsAttributes extends StencilHTMLAttributes {
    'renderer'?: import('stencil-apollo').QueryRenderer<
    AllPostsQuery,
    AllPostsQueryVariables
    >;
  }

  interface MyComponentWithCodegen {
    'first': string;
    'last': string;
  }
  interface MyComponentWithCodegenAttributes extends StencilHTMLAttributes {
    'first'?: string;
    'last'?: string;
  }

  interface ApolloUpvotePost {
    'renderer': import('stencil-apollo').MutationRenderer<UpvotePostMutation, UpvotePostMutationVariables>;
  }
  interface ApolloUpvotePostAttributes extends StencilHTMLAttributes {
    'renderer'?: import('stencil-apollo').MutationRenderer<UpvotePostMutation, UpvotePostMutationVariables>;
  }
}

declare global {
  interface StencilElementInterfaces {
    'ApolloAllPosts': Components.ApolloAllPosts;
    'MyComponentWithCodegen': Components.MyComponentWithCodegen;
    'ApolloUpvotePost': Components.ApolloUpvotePost;
  }

  interface StencilIntrinsicElements {
    'apollo-all-posts': Components.ApolloAllPostsAttributes;
    'my-component-with-codegen': Components.MyComponentWithCodegenAttributes;
    'apollo-upvote-post': Components.ApolloUpvotePostAttributes;
  }


  interface HTMLApolloAllPostsElement extends Components.ApolloAllPosts, HTMLStencilElement {}
  var HTMLApolloAllPostsElement: {
    prototype: HTMLApolloAllPostsElement;
    new (): HTMLApolloAllPostsElement;
  };

  interface HTMLMyComponentWithCodegenElement extends Components.MyComponentWithCodegen, HTMLStencilElement {}
  var HTMLMyComponentWithCodegenElement: {
    prototype: HTMLMyComponentWithCodegenElement;
    new (): HTMLMyComponentWithCodegenElement;
  };

  interface HTMLApolloUpvotePostElement extends Components.ApolloUpvotePost, HTMLStencilElement {}
  var HTMLApolloUpvotePostElement: {
    prototype: HTMLApolloUpvotePostElement;
    new (): HTMLApolloUpvotePostElement;
  };

  interface HTMLElementTagNameMap {
    'apollo-all-posts': HTMLApolloAllPostsElement
    'my-component-with-codegen': HTMLMyComponentWithCodegenElement
    'apollo-upvote-post': HTMLApolloUpvotePostElement
  }

  interface ElementTagNameMap {
    'apollo-all-posts': HTMLApolloAllPostsElement;
    'my-component-with-codegen': HTMLMyComponentWithCodegenElement;
    'apollo-upvote-post': HTMLApolloUpvotePostElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
