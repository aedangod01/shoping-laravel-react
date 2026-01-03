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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('order_id')->constrained('carts')->cascadeOnDelete();

            // روش پرداخت
            $table->enum('method', [
                'gateway', // درگاه آنلاین
                'card',    // کارت بانکی
                'wallet',  // کیف پول
                'cash',    // پرداخت در محل
            ]);

            // وضعیت پرداخت
            $table->enum('status', [
                'pending',
                'paid',
                'failed',
                'canceled',
            ])->default('pending');

            // مبلغ
            $table->unsignedBigInteger('amount');

            // کد رهگیری درگاه
            $table->string('ref_id')->nullable()->unique();

            // پیام درگاه
            $table->string('gateway_message')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
