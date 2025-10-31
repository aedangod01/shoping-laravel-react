<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->text('description');
            $table->integer('price');
            $table->integer('quantity');
            $table->string('image')->nullable();
            $table->integer('discount')->default(0); 
            $table->integer('view_count')->default(0); 
            $table->string('brand')->nullable(); 
            $table->string('sku')->unique()->nullable();
            $table->enum('rating', ['1', '2', '3', '4', '5'])->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
